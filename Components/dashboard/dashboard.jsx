import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import Header from '../common/header.jsx';
import Footer from '../common/footer.jsx';
import {Link} from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {

    super(props);

    this.state = {

      //  claimList:[]
    };
   
  }
  
  render() {
    return (
      <div >
         <Header showNav="true" clicked="home" />
        <main role="main" className="main-content" >
          <div id="home" className="container" ><h1 className="mt-5">Welcome to Claim Admin</h1></div>
        </main>
        <Footer />
      </div>

    );
  }
}

export default Dashboard;   