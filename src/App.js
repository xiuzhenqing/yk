import React, { Component } from 'react';
import logo from './imgs/beilogo.jpg';
import './App.css';
import Wl_intro from './js/Intro';
import Wl_Recruit from './js/Recruit';
import Wl_Team from './js/Team';
import Home from './js/Home';
import Anli from './js/Anli';
import State from './js/State';
import Footer from './Footer';
import Territory from './js/Territory';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class BasicExample extends Component {
	componentDidMount(){
		$('#wl_navI li').click(function(){
			(document.body.scrollTop=0)||(document.documentElement.scrollTop=0)
		})
		$('#Wl_logo').click(function(){
			(document.body.scrollTop=0)||(document.documentElement.scrollTop=0)
		})
	}
	render(){
		return (
			<Router>
			  <div className="box">
			    <div className="x-header clear">
				    <div className="left x-logob">
				      <Link to="/" id="Wl_logo"><img src={logo} alt="logo" className="x-logo"/></Link>
				    </div>

				      <ul className="x-nav right" id="wl_navI">
				        <li className="san"><span className="right"></span><Link to="/intro">介绍</Link></li>
				        <li><Link to="/Territory">领域</Link></li>
				        <li><Link to="/Team">团队</Link></li>
				        <li><Link to="/Anli">案例</Link></li>
				        <li><Link to="/State">动态</Link></li>
				        <li><Link to="/recruit">招贤纳士</Link></li>
				      </ul>
			    </div> 
			     <Route exact path="/" component={Home}/>
			     <Route exact path="/Intro" component={Wl_intro}/>
			     <Route exact path="/Team" component={Wl_Team}/>  
			     <Route exact path="/Anli" component={Anli}/>
			     <Route exact path="/State" component={State}/>
			     <Route exact path="/Recruit" component={Wl_Recruit}/>  
			     <Route exact path="/Territory" component={Territory}/>  
			 </div>
		  </Router>
		)
	}
  
}

export default BasicExample;
