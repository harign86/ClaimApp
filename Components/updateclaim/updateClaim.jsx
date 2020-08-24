import React from 'react';
import Header from '../common/header.jsx';
import Footer from '../common/footer.jsx';
import axios from 'axios';
import {Link} from "react-router";

class UpdateClaim extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
          cUpdated: false, 
          invalidclmno: true,
          invalidclmpgm: true,
          invalidstrdate: true, 
          invalidenddate: true,
          selectedClaim:''         
      };
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
  handleValidation() {
      let formIsValid = true;
    if (this.refs['claimnumber'].value == '') {
      console.log("In" + this.state.isfrmValid);
      this.setState({ invalidclmno: false });
      formIsValid = false;
    }
    if (this.refs['clmpgm'].value == '') {
      this.setState({ invalidclmpgm: false });
      formIsValid = false;
    }
    if (this.refs['startdate'].value == '') {
      this.setState({ invalidstrdate: false });
      formIsValid = false;
    }
    if (this.refs['enddate'].value == '') {
      this.setState({ invalidenddate: false });
      formIsValid = false;
    }
    return formIsValid;
  }
  handleUpdate(e) {
    e.preventDefault();
   
    console.log(this.state.isfrmValid);
    if (this.handleValidation()) {
      const claim = this.state.claim;
      this.SaveClaim(claim);
    }
  }
  SaveClaim(claim) {
    console.log(this.state.selectedClaim)
    const params = {
      empId: claim.empId,
      empName: claim.empName,
      claimNumber: this.refs['claimnumber'].value,
      claimType: this.state.selectedClaim,
      claimProgram: this.refs['clmpgm'].value,
      claimStartDate: this.refs['startdate'].value,
      claimEndDate: this.refs['enddate'].value
    }
    
    const resp = axios.put('http://localhost:7000/claims/' + this.props.location.state.id, params)
      .then(resp => {
        this.setState({ cUpdated: true });
      });
  }
  componentDidMount() {
    this.setState({ claim: this.props.location.state, selectedClaim:this.props.location.state.claimType });
    //console.log(this.props.location.state);
  }
  render() {

    return (
      <div>
        <Header showNav="true" clicked="uclaim" />
     
          <div id="updateclaim" className="updateForm" >
            <form onSubmit={this.handleUpdate}>
              <div className="form-group">
                <label htmlFor="usr">Claim Number:</label>
                <input ref="claimnumber" onChange={this.handleChange} type="text" defaultValue={this.props.location.state.claimNumber} className="form-control" id="inclmno" />
                < div hidden={this.state.invalidclmno}>
                  <small class="text-danger"> claim number is required </small>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="usr">Claim Type:</label>
                {/* ref="clmType" <input type="text" defaultValue={this.props.location.state.claimType} className="form-control" id="inclmtype" /> */}
                <select id="clmtype" 
                   onChange={(e) => this.setState({selectedClaim: e.target.value})} className="form-control" defaultValue={this.props.location.state.claimType}>
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Submitted">Submitted</option>
                  <option value="Recieved">Recieved</option>
                  <option value="Denied">Denied</option>
                  <option value="Rejected">Rejected</option>
                </select>

              </div>
              <div className="form-group">
                <label htmlFor="usr">Claim Program:</label>
                <input ref="clmpgm" type="text" defaultValue={this.props.location.state.claimProgram} className="form-control" id="inclmprg" />
                <div hidden={this.state.invalidclmpgm}>
                  <small class="text-danger"> Claim program is required </small>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="usr">Claim Start Date:</label>
                <input ref="startdate" type="date" defaultValue={this.props.location.state.claimStartDate} className="form-control" id="instartdate" />
                <div hidden={this.state.invalidstrdate}>
                  <small class="text-danger"> Start date is required </small>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="usr">Claim End Date:</label>
                <input ref="enddate" type="date" defaultValue={this.props.location.state.claimEndDate} className="form-control" id="inenddate" />
                <div hidden={this.state.invalidenddate}>
                  <small class="text-danger"> End date is required </small>
                </div>
              </div>
              {this.state.cUpdated == false ? (
                <div id="submitclaim" >
                  <button type="submit" className="btn btn-success mr-1"  >Update</button>
                  <Link className="btn btn-success" to={"/viewClaim"}>Cancel</Link>
                </div>
              ) : (
                  <div id="alert" className="alert alert-success" role="alert">
                    Claim updated successfully.Click <Link to={"/viewClaim"}>here</Link> to go back.
                  </div>
                )
              }
            </form>
          </div>
        <Footer />
      </div>
    );
  }
}

export default UpdateClaim;   