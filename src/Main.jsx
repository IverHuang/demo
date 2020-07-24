import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.jsx';
import MainContent from './MainContent/MainContent.jsx';
import Footer from  './Footer/Footer.jsx';
class Main extends React.Component {

render(){
return(
<div>
<Header />
<MainContent />
<Footer />
</div>
  );
 }
}

export default Main;
