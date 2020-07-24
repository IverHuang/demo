import React from 'react';
import ReactDOM from 'react-dom';
import "./Footer.css";

class Footer extends React.Component{

  showCurrentYear() {
    return new Date().getFullYear();
}
 render(){
  return(
    <div className="footer">
      <center>
     {this.showCurrentYear()} Copyright: IverHuang
     </center>
    </div>
  );
 }
}

export default Footer;
