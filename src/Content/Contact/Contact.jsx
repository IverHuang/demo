import React from 'react';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';
import Dark from '../../MainContent/image/dark.jpg';
import contact from '../../MainContent/image/invoker.jpg';
import { Button, Form, FormGroup, Label, Input, FormText,Card,CardImg} from 'reactstrap';
import "./Contact.css";
const DB = {
  backgroundImage:"url(" +  Dark  + ")",
};

const Con = {
  backgroundImage:"url(" +  contact  + ")",
};
class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      apiResponses:[],
      
    };
   
}

callAPI() {
    fetch("http://localhost:9000/ContactAPI")
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
                <div key={apiResponse.ID}> Here is the Man & Woman: {apiResponse.ContactName}   Number: {apiResponse.ContactNumber} and email:{apiResponse.Email}</div>
              )}
          <div>
            <div className="title">Please Leave any request to us!</div>
            
            <Form action="mailto:info@w3docs.com" method="get" enctype="text/plain">
      <FormGroup className="padding">
        <Label for="name">Name:
          <Input type="text" name="name" id="name" />
        </Label>
      </FormGroup>
      <FormGroup className="padding">
        <Label for="email">Email:
          <Input type="text" name="email" id="email" />
        </Label>
      </FormGroup>
      <FormGroup className="padding">
        <Label>Comments:</Label>
        <br />
        <Input type="textarea" name="text" id="exampleText" className="text" />
      </FormGroup>
      <div className="buttontest">
        <Button  outline type="submit" name="submit" value="Send" color="secondary" className="button">Sumbit</Button>
      </div>
    </Form>
          <Footer />
          </div>
   </div>
    );
  }
}

export default Contact;
