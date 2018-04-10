import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';

class Home extends Component {
    render() {
        return (
            <div>
                { !this.props.auth
                    ? "not yet"
                    : <BookList name="reading" list={this.props.auth.readingBooks} />
                }
                <BookList name="reading" list={["IGkwDwAAQBAJ", "y6DeDQAAQBAJ", "kpnHBAAAQBAJ"]} />
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps) (Home);