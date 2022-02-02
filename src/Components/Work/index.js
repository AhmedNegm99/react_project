import axios from 'axios';
import React,{Component} from 'react';
import {WorkSection,WorkTitle,Part,Icon,PartTitle,Line,PartDesc,Span} from './style';

class  Work extends Component{

  state={
    works:[]
  }

componentDidMount(){
  axios.get("js/data.json").then(res=>{
    // console.log(res.data.works);
    this.setState({
      works:res.data.works
    })
  })
}



  render(){
   
    let {works}=this.state
    let worksList=works.map((workItem)=>{
      return(
        <Part first={workItem.id} key={workItem.id}>
        <Icon className={workItem.icon_name}></Icon>
        <PartTitle>{workItem.title}</PartTitle>
        <Line />
        <PartDesc>
            {workItem.body}
        </PartDesc>
        </Part>
      )
     
    })

    return (
      <WorkSection>
      <div className="container">
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          {worksList}
      </div>
  </WorkSection>
    );
  }

}

export default Work;