import React from 'react';

import axios from 'axios';

class ClaimList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            claims: []
    }

  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const claims = res.data;
        this.setState({ claims });
      })
  }

  render() {
    return (
      <ul>
        { this.state.claims.map(claim => <li>{claim.name}</li>)}
      </ul>
    )
  }
}
export default ClaimList;