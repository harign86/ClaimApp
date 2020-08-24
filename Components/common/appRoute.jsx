import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } 
from 'react-router';

class AppRouter extends React.Component {
   render() {
      return (
         <div>
             <Link to="home"></Link> 
		       {/* 
                <Link to="claim">Claim Summary !</Link>
      <Link to="update">Update Claim !</Link>  */}
         
   {this.props.children}  
         </div>
      )
   }
}

export default AppRouter;





