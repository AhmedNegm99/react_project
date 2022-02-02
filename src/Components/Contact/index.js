import React,{Component} from 'react';
import {Drop,DropTitle,Span,Form,FormInput,Input,InputEmail,InputText,InputSub,Textarea,InputSubmit} from './style'
class  Contact extends Component{
  render(){
    return (
      <Drop>
      <div className="container">
          <DropTitle><Span>Drop </Span>Me A line</DropTitle>
          <Form action="">
              <FormInput>
                  <InputText type="text" placeholder="Your Name" />
                  <InputEmail type="email" placeholder="Your Email" />
              </FormInput>
              <InputSub type="text" class="sub" placeholder="Your Subject" />
              <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
              <InputSubmit type="submit" value="Send Message" />
          </Form>
      </div>
  </Drop>
    );
  }

}

export default Contact;