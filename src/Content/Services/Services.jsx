import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';
import Dark from '../../MainContent/image/dark.jpg';
import Gold from "../../MainContent/image/pudge.jpg";
import Sliver from "../../MainContent/image/jugg.jpg";
import Bronze from "../../MainContent/image/invoker.jpg";
import "./Services.css";
const DB = {
  backgroundImage:"url(" +  Dark  + ")",
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
class Services extends React.Component{
  
  render(){
    return(
       <div style={ DB } id="db">
       <div>
          <Header />
          </div>
             <center className="title">
               <h>Service&Price</h>
              <p>We offer different kinds of services that will fit to your requests.</p>
             </center>
             <div>
     <Container>
     <Row>
     <Col className="col-sm-12 col-md-6 col-lg-4">
     <div className="Card">
  <Card body inverse className="text-center" style={ CG } id="cg">
    <CardBody className="test">
      <CardTitle className="gc">Gold</CardTitle>
      
      <CardText >
        <p className="gc">
        Gold Plan Offers the boost tier from  your current tier to three tier higher.
        </p>
        </CardText>
      <CardText>
        <p className="gc">
          Will be promise the win rate at 80%.
          </p>
          </CardText>
      <CardText>
        <small className="gc">
        Price will be 100 CAD.(200 if tier is higher than platinum).
        </small>
        </CardText>
      <Button outline href="/Gold" color="warning">Examples</Button>
    </CardBody>
  </Card>
</div>

     </Col>
     <Col className="col-sm-12 col-md-6 col-lg-4">
     <div className="Card">
       <Card body inverse className="text-center" style={ SG } id="sg">
         <CardBody className="test">
         <CardTitle className="sc">Sliver</CardTitle>
         <CardText>
        <p className="sc">
        Sliver Plan Offers the boost tier from  your current tier to two tier higher.
        </p>
        </CardText>
      <CardText>
        <p className="sc">
          Will be promise the win rate at 70%.
          </p>
          </CardText>
      <CardText>
        <small className="sc">
        Price will be 60 CAD.(120 if tier is higher than platinum).
        </small>
        </CardText>
           <Button outline href="/Sliver">Examples</Button>
         </CardBody>
       </Card>
     </div>

     </Col>
     <Col className="col-sm-12 col-md-6 col-lg-4">
     <div className="Card">
       <Card body inverse className="text-center" style={ BRG } id="brg">
         <CardBody className="test">
           <CardTitle className="bc">Bronze</CardTitle>
           <CardText>
        <p className="bc">
        Bronze Plan Offers the boost tier from  your current tier to one tier higher.
        </p>
        </CardText>
      <CardText>
        <p className="bc">
          Will be promise the win rate at 60%.
          </p>
          </CardText>
      <CardText>
        <small className="bc">
        Price will be 30 CAD.(60 if tier is higher than platinum).
        </small>
        </CardText>
           <Button outline href="/Bronze" color="info">Examples</Button>
         </CardBody>
       </Card>
     </div>

     </Col>
     </Row>
     </Container>
    </div>
          <div>
          <Footer />
          </div>
   </div>
    );
  }
}

export default Services;
