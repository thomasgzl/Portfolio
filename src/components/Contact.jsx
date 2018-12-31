import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ScrollableAnchor from "react-scrollable-anchor";
import { SocialIcon } from "react-social-icons";
import logoTg from "./thomasgonzalez.png";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id={"Contact"}>
        <div className="Contact">
        <h1> <i class="far fa-comments"></i> CONTACT</h1>

            <Form>
      <div className="form">
        <FormGroup row>
          <Col sm={10}>
            <Input className="input" type="email" name="email" id="exampleEmail" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={10}>
            <Input className="input" type="name" name="name" id="exampleName" placeholder="Nom" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={10}>
            <Input className="input" type="object" name="object" id="exampleObject" placeholder="Objet" />
          </Col>
        </FormGroup>

                <FormGroup row>
          <Col sm={10}>
            <Input className="input" type="textarea" name="text" id="exampleText" placeholder="Message" />
          </Col>
        </FormGroup>
            </div>
        
            <button action="mailto:thomasgonzalez.pro@gmail.com" className="subButton">ENVOYER</button>
     
      </Form>


          <div className="Footer">
          <a href="#"> <img src={logoTg} className="FootLogo" alt="logo" /> </a>
            <br />
            <SocialIcon
              color="white"
              className="LinkedIn"
              url="https://www.linkedin.com/in/thomasgzl/"
            />
            <SocialIcon
              color="white"
              className="Twitter"
              url="https://twitter.com/athmos6"
            />
            <SocialIcon
              color="white"
              className="Insta"
              url="https://www.instagram.com/athmos6/"
            />
            <SocialIcon
              color="white"
              className="Git"
              url="https://github.com/thomasgzl"
            />
            <SocialIcon
              color="white"
              className="Mail"
              url="mailto:thomasgonzalez.pro@gmail.com"
            />
            <p className="copyright">
              {" "}
              Made with <span className="coeur">♥</span> by Thomas Gonzalez •
              Développeur web junior • Copyright © 2018{" "}
            </p>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Contact;
