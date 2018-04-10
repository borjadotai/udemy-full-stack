import React, { Component } from 'react';
import Book from './Book';
import Title from './Title';
import google from '../utils/google-api';
import requests from '../utils/requests';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      list: props.list,
      list2: []
    };

    this.addToReading = this.addToReading.bind(this);
  }

  componentDidMount () {
    this.updateList(this.state.updateList);
  }

  updateList() {
    this.state.list.map(id => {
      google.lookup(id).then(book => {
        let updated = this.state.list2;
        updated.push({
          "id": book.id,
          "name": book.volumeInfo.title,
          "image": book.volumeInfo.imageLinks.thumbnail,
          "alt": book.volumeInfo.title
        });
        this.setState(() => {
          return {
            name: this.state.name,
            list: this.state.list,
            list2: updated
          }
        });
        return book;
      });
      return {};
    });
  }

  addToReading(id) {
    return requests.addToReading(id);
  }

  render() {
      const list = this.state.list2;
      return (
        <div>
          <Title title={this.state.name} link="#" />
          <ul className={this.state.name}>
            { !list 
              ? "wait"
              : list.map(book => {
                return (
                  <li key={book.name}>
                    <Book 
                      name={book.name}
                      image={book.image}
                      alt={book.alt} />
                    <button onClick={() => {this.addToReading(book.id); this.setState();}}>Read</button>
                  </li>
                );
              })}
          </ul>
        </div>
      );
  }
}

export default BookList;