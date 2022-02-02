import React,{Component} from 'react';
import Home from './../Home';
import About from './../About';
import Portofolio from './../Portofolio';
import Profile from './../Profile';
import Work from './../Work';
import SocialMedia from './../SocailMedia';


class  Index extends Component{
  render(){
    return (
      <div className="Index">
      <Home />
      <Work />
      <Portofolio />
      <Profile />
      <About />
      <SocialMedia />

      </div>
    );
  }

}

export default Index;