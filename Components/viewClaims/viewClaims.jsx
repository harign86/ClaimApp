import React from 'react';
import axios from 'axios';
import Header from '../common/header.jsx';
import Footer from '../common/footer.jsx';
import {Link} from 'react-router';

class ViewClaim extends React.Component {
  constructor(props) {

    super(props);

    this.state = {

      //  claimList:[]
    };
  }

  getClaimData() {
    axios
      .get(`http://localhost:7000/claims`)
      .then(res => {
        const data = res.data
        console.log(data);
        const claimlist = data.map(u =>

          <tr>
            <td>{u.empId}</td>
            <td>{u.empName}</td>
            <td>{u.claimNumber}</td>
            <td >{u.claimType}</td>
            <td >{u.claimProgram}</td>
            <td>{u.claimStartDate}</td>
            <td>{u.claimEndDate}</td>
            <td><Link  to={{pathname: "/update",state:{id: u.id, empId : u.empId,empName:u.empName,claimNumber:u.claimNumber,
             claimType:u.claimType,claimProgram:u.claimProgram,claimStartDate:u.claimStartDate,
             claimEndDate:u.claimEndDate  }}} >Update </Link></td>
          </tr>
        )
        this.setState({ claimlist })
      })
  }
  componentDidMount() {
    this.getClaimData()
  }
 
  
  render() {
    return (
      <div >
        <Header showNav="true" clicked="vclaim" />
        <main role="main" className="main-content">
          <div id="viewclaim" className="myDiv container-fluid" >
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive table--no-card m-b-30">
                   <table id="tblviewclaim" className="table table-borderless table-striped table-earning"> 
                    <thead>
                      <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Claim Number</th>
                        <th >Claim Type</th>
                        <th >Claim Program</th>
                        <th >Claim Start Date</th>
                        <th >Claim End Date</th>
                        <th >Update</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.claimlist}

                    </tbody>
                  </table> 

                </div>
              </div>
            </div>
          </div>

        </main>
        <Footer  />
      </div>

    );
  }
}

export default ViewClaim;   