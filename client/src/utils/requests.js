import axios from 'axios';

const addToReading = (id) => {
  var encodedURI = window.encodeURI('/api/package/read?bookId='+ id);

  return axios.get(encodedURI);
}

const getReading = (googleId) => {
  var encodedURI = window.encodeURI('/api/package/get?id='+ googleId);

  return axios.get(encodedURI);
}

export default {addToReading, getReading};
