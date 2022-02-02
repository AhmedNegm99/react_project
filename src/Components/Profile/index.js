import axios from 'axios';
import React,{Component} from 'react';
import {ProfileSkills,ProfileSection,ProfileTitle,ProfileTitleSpan,ProfileList,ProfileItem,Span,Skills,SkillSpan,SkillsDesc,SkillsTitle,SkillsTitleSpan,Web,Perc,Parent,Title,Bar} from './style'
class  Profile extends Component{
  state={
    skills:[]
  }


  componentDidMount(){
    axios.get('js/data.json').then(res =>{
      this.setState({
        skills:res.data.Profile
      })
    })
  }



  render(){
let {skills} = this.state
 let skillList=skills.map((skillitem)=>{
   return(
    <Bar key={skillitem.id}>
    <Title>{skillitem.skill}</Title>
    <Perc>{skillitem.prec}%</Perc>
    <Parent>
        <SkillSpan Perc={skillitem.prec} ></SkillSpan>
    </Parent>
   </Bar>
   )
 })

    return (
      <ProfileSkills>
            <div className="container">
                <ProfileSection>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <Web>www.google.com</Web>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                  {skillList}
                </Skills>
                
            </div>
        </ProfileSkills>
        
    );
  }

}

export default Profile;