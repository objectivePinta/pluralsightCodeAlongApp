import React,{Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Omega Administration</h1>
        <p>Some description to enlighten you.</p>
        <Link to="about" className="btn btn-primary btn-lg">About </Link>
      </div>
    );
  }
}

export default HomePage; //when someone imports the file...it gets a reference to the HomePage class, because I exported it
