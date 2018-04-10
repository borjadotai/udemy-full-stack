import axios from 'axios';

const lookup = (id) => {
  var encodedURI = window.encodeURI('https://www.googleapis.com/books/v1/volumes/'+ id);
  
  return axios.get(encodedURI)
    .then(function (response) {
      return response.data;
    });
}

export default {lookup};
