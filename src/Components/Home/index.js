import React,{Component} from 'react';
import {HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from './style';
class  Home extends Component{
  render(){
    return (
      <HomeSection>
      <div className="container">
          <HomeInformation>
              <HomeTitle>Ahmed Negm</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <HomeDesc>
                  Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDesc>
              <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
      </div>
  </HomeSection>
    );
  }

}

export default Home;