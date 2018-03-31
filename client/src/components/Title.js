import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {

    let name = "";
    switch(props.title) {
      case "reading":
          name = "CONTINUE READING";
          break;
      case "trending":
          name = "Trending on Grafty";
          break;
      default:
          name = "Default Title Component";
    }

    return (
        <div className="booklist_title">
          <a href={props.link}>{name}</a> 
        </div>
    );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Title;