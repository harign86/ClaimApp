
import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            claims: []
    };

  }
  render() {
    return (
<  div>
                <footer className="footer">
                <div className="container">
                <span className="text-info">Copyright ClaimAdmin @2020.</span>
                </div>
                </footer>
                </div>

    )
  }
}

export default Footer;

