import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {SocialMediaSection,Social,Icon,Span,SpanInfo,Phagraph} from './style'

const SocailMedia=()=>{

const[socails,setsocails]=useState([])

useEffect(()=>{
axios.get('js/data.json').then(res =>{
  setsocails(res.data.social)
})
},[])

let socailsList=socails.map((socialitem)=>{
  return(
    <Social item={socialitem.id} key={socialitem.id}>
    <Icon className={socialitem.icon}></Icon>
    <Phagraph>
        <Span >{socialitem.title}</Span>
        <SpanInfo>{socialitem.body}</SpanInfo>
    </Phagraph>
   </Social>
  )
})

    return (
      <SocialMediaSection>
            {socailsList}
      </SocialMediaSection>
    );

}

export default SocailMedia;