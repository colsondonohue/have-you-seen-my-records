import axios from 'axios';

export default function(username) {
  return axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${username}&api_key=9ac0b0dfd73fae7a19ed7f834132bac6&format=json`)
    .then(response => response.data.message == "User not found" ? false : true)
}
