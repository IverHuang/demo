import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import Bronze from './Content/Bronze/Bronze.jsx';
import Sliver from './Content/Sliver/Sliver.jsx';
import Gold from './Content/Gold/Gold.jsx';
import Services from './Content/Services/Services.jsx';
import Contact from './Content/Contact/Contact.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <Router>
       <div>
         <Route exact path="/" component={Layout} />
         <Route path="/Bronze" component={Bronze} />
         <Route path="/Sliver" component={Sliver} />
         <Route path="/Gold" component={Gold} />
         <Route path="/Contact" component={Contact} />
         <Route path="/Services" component={Services} />
         
       </div>
   </Router>,
 document.getElementById('root'));
