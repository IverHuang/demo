import React from 'react';
import Example from "./Header/Header.jsx";
import MainContent from "./MainContent/MainContent.jsx";
import Footer from "./Footer/Footer.jsx";
class Layout extends React.Component{
  render(){
    return(
       <div>
         <Example />
        <MainContent />
        <Footer />
   </div>
    );
  }
}

export default Layout;
