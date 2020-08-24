import React from 'react';
import { Link, browserHistory } from "react-router";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          hideHeader: false
        }
  }
  logOut() {
    browserHistory.push('/');
};

handleTime() {
    var d = new Date(),
      minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
      hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
      ampm = d.getHours() >= 12 ? 'pm' : 'am',
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ampm;
  };
  render() {
    return (
    <div >
         <header  > 
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
           
            {this.props.showNav === "true" ? (<div className="navbar-brand logo" >Claim Management System</div>):(<div className="navbar-brand" >Claim Management System</div>)}
     
            {this.props.showNav === "true" ? (
            <div  className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className={"nav-item " + (this.props.clicked === "home" ?("active"):(''))} >
                  <Link className="nav-link" to={"/dashboard"} >Home </Link>
                </li>
                <li className={"nav-item " + (this.props.clicked === "vclaim" ?("active"):(''))}>
                  <Link className="nav-link" to={"/viewClaim"} >View Claim Summary</Link>
                </li>
                <li className={"nav-item " + (this.props.clicked === "uclaim" ?("active"):(''))}>
                <Link className="nav-link" to={"/update"} >Update Claim Summary</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">Contact Us</a>
                </li>
              </ul>

              <form className="form-inline mt-2 mt-md-0 ">
                <div className="mr-3"><span className="text-info" >Welcome {localStorage.getItem('user')}</span><br />
                  <span className="text-info" id="time" >{this.handleTime()}</span>
                </div>
                <div>
                <Link className="btn btn-outline-success my-2 my-sm-0" to={"/"} >Sign Out</Link>
                </div>
              </form>
            </div>
            ) : (<div></div>)}
          </nav>
        </header>
    </div>
    )
  }
}
export default Header;