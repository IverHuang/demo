import React from 'react';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';
import Dark from '../../MainContent/image/dark.jpg';
import "./Gold.css";
const DB = {
  backgroundImage:"url(" +  Dark  + ")",
};
class Gold extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      apiResponses:[],
      
    };
   
}

callAPI() {
    fetch("http://localhost:9000/GoldAPI")
         .then(res => { 
           return res.json()
         } ) 
         .then(apiResponses => {
             this.setState({ apiResponses })
           });
        

}

componentDidMount() {
    this.callAPI();
}


  render(){
    return(
       <div style={ DB } id="db">
       <div>
          <Header />
          </div>
          {this.state.apiResponses.map(apiResponse =>
                <div key={apiResponse.ID} className="generalg"> Here is the User {apiResponse.Name}  Who is {apiResponse.Tier} Tier. The Total Price for boosting from {apiResponse.Tier} to {apiResponse.DestTier} and Total Price is {apiResponse.Price}</div>
              )}
          <div>
          <Footer />
          </div>
   </div>
    );
  }
}

export default Gold;
