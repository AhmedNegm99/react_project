import styled from "styled-components";

export const ProfileSkills=styled.div `
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileSection=styled.div `
    width: 50%;
    float: left;
`;


export const ProfileList=styled.ul `
    list-style: none
`

export const ProfileItem=styled.li `
    margin-bottom: 8px
`;

export const Span=styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`;

export const Web=styled.span `
    font-weight: normal;
    color: #eb5424
`;

export const Skills=styled.div `
    width: 50%;
    float: left;
`;

export const SkillsDesc=styled.p `
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar=styled.div `
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`;

export const Title=styled.span `
    float: left;
`

export const Perc=styled.span `
    float: right;
    margin-right: 100px
`

export const Parent=styled.div `
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const SkillSpan=styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width:${props =>props.Perc === "100"  ? "100%" : ""};
    width:${props =>props.Perc === "90"  ? "90%" : ""};
    width:${props =>props.Perc === "80"  ? "80%" : ""};

                
                    `
// .profile_skills .skills .bar .parent span.sp1 {
//     width: 100%;
// }

// .profile_skills .skills .bar .parent span.sp2 {
//     width: 90%;
// }

// .profile_skills .skills .bar .parent span.sp3 {
//     width: 80%;
// }

export const   ProfileTitle=styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const ProfileTitleSpan=styled(ProfileTitle)`
font-weight: normal;
`

export const SkillsTitle=styled(ProfileTitle)``
export const SkillsTitleSpan=styled(ProfileTitle)`
font-weight: normal;
`


// .profile_skills .profile .profile-title span,
// .profile_skills .skills .skills-title span{
//     font-weight: normal;
// }