import React from 'react';
import { Button } from 'reactstrap';
import './Button.css'
import { BrowserRouter as Route, Link } from "react-router-dom";

export default class HeaderButton extends React.Component {

  render() {
    return (
      <div>
        <Button href='#Apropos' outline className="headerButton">ENTRER</Button>
      </div>
    );
  }
}