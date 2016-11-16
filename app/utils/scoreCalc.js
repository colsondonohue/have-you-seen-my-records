import axios from 'axios';

function getListeningInfo(username) {
  return axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&limit=200&api_key=9ac0b0dfd73fae7a19ed7f834132bac6&format=json`)
    .then(response => (
      response.data.topalbums.album.map(info => {
        return {album: info.name, artist: info.artist.name, plays: info.playcount};
      })
    ));
}

function getAlbumPlays(listeningInfo) {
  return listeningInfo.reduce((total, album) => total + parseInt(album.plays), 0);
}

// returns sum of obscurity scores weighted by playcount
function calcObscurityScore(listeningInfo) {
  const scoreArr = listeningInfo.map(info => (
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=9ac0b0dfd73fae7a19ed7f834132bac6&artist=${encodeURIComponent(info.artist)}&album=${encodeURIComponent(info.album)}&format=json`)
      .then(response => ((50 - 50 * parseInt(response.data.album.listeners) / 2400000) * parseInt(info.plays))) //TODO: fix hardcoded top listeners (a rush of blood to the head - coldplay)
      .catch(error => console.log(info.album + ' - ' + info.artist + ': ' + error))
    )
  );

  return axios.all(scoreArr)
    .then(scores => scores.reduce((prev, current) => prev + current, 0));
}

// returns sum of critic scores weighted by playcount
function calcCriticScore(listeningInfo) {
  const scoreArr =  listeningInfo.map(info => (
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.morph.io/colsondonohue/pitchfork_review_data/data.json?key=lmjzYusD1Q9rBM0l4P1h&query=select%20score%20from%20'data'%20where%20artists%20like%20'%25${encodeURIComponent(info.artist)}%25'%20and%20album%20like%20'%25${info.album.indexOf('\'') != -1 ? encodeURIComponent(info.album.substr(0, info.album.indexOf('\''))) : encodeURIComponent(info.album)}%25'`)
      .then(response => response.data[0].score * 5 * parseInt(info.plays))
      .catch((error) => {
        console.log(info.album + ' - ' + info.artist + ': ' + error);
        return 0; // assume score of 0/10 if critic info can't be found, since pitchfork is the fount of indie knowledge
      })
    )
  )

  return axios.all(scoreArr)
    .then(scores => scores.reduce((prev, current) => prev + current, 0));
}

// averages critic and obscurity scores
function getScore(username) {
  return getListeningInfo(username)
    .then(info => axios.all([getAlbumPlays(info), calcObscurityScore(info), calcCriticScore(info)])
      .then((scores) => {
        console.log(scores[0]);
        console.log(scores[1]);
        console.log(scores[2]);
        return Math.round((scores[1] + scores[2]) / scores[0]);
      })
    )
}

export default getScore;
