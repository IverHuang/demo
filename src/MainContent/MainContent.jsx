import React from 'react';
import ReactDOM from 'react-dom';
import "./MainContent.css";
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./MainContent.css";
import Background from "./image/background.jpg";
import Gold from "./image/pudge.jpg";
import Sliver from "./image/jugg.jpg";
import Bronze from "./image/invoker.jpg";
 const BG = {
  backgroundImage: "url(" +  Background  + ")"

};
 const SG = {
 backgroundImage: "url(" +  Sliver  + ")",
 borderColor: '#333'
};
const BRG = {
backgroundImage: "url(" +  Bronze  + ")",
borderColor: '#333'
};
const CG = {
 backgroundImage: "url(" +  Gold  + ")",
 borderColor: '#333'


};
class MainContent extends React.Component{
 render(){
  return(
    <div style={ BG }  id="bg">
      <center className="padding">
        <p className="title">Welcome to My House!</p>
      </center>
     <Container>
     <Row>
     <Col className="col-sm-12 col-md-6 col-lg-4">
     <div className="Card">
  <Card body inverse className="text-center" style={ CG } id="cg">
    <CardBody>
      <CardTitle>Gold</CardTitle>
      <CardText>Gold Plan Offers the boost tier from  your current tier to three tier higher.</CardText>
      <Button outline href="/Services" color="secondary">Check it Out!!!</Button>
      
    </CardBody>
  </Card>
</div>

     </Col>
     <Col className="col-sm-12 col-md-6 col-lg-4">
     <div className="Card">
       <Card body inverse className="text-center"  style={ SG } id="sg">
         <CardBody>
         <CardTitle>Sliver</CardTitle>
           <CardText>Gold Plan Offers the boost tier from  your current tier to two tier higher.</CardText>
           <Button outline href="/Services" color="secondary">Check it Out!!</Button>
         </CardBody>
       </Card>
     </div>

     </Col>
     <Col className="col-sm-12 col-md-6 col-lg-4">
     <div className="Card">
       <Card body inverse className="text-center"  style={ BRG } id="brg">
         <CardBody>
           <CardTitle>Bronze</CardTitle>
           <CardText>Gold Plan Offers the boost tier from  your current tier to one tier higher.</CardText>
           <Button outline href="/Services" color="secondary">Check it Out!</Button>
         </CardBody>
       </Card>
     </div>

     </Col>
     </Row>
     </Container>
    </div>
  );
 }
}

export default MainContent;
