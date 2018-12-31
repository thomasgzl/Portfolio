import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Card, CardTitle, CardImg, CardImgOverlay, Col, Row, Container } from 'reactstrap';
import img1 from '../img/Cerftete.png';
import img2 from '../img/miamiDolphins.png';
import './Projets.css';

class Projets extends Component {

    render() { 
        return (

        <ScrollableAnchor id={'Projets'}>
         <div className="Projets">
        <h1>MES PROJETS</h1>
        <Container>
            <Row> 
        <Col className="contimg" lg={6}>
                    <a href="http://www.campus-bordeaux.ovh/xteam/" target="_blank">
                    <CardImg width="100%" className="projetImg" src={img1} alt="img1" />
                    <CardImgOverlay>
                    <div className="backimg">
                    <p> HTML 5 - CSS 3 - Bootstrap </p>
                    </div>
                    </CardImgOverlay>
                    </a>
                    </Col>

                    <Col className="contimg" lg={6}>
                    <a href="#" target="_blank">
                    <CardImg width="100%" className="projetImg" src={img2} alt="img1" />
                    <CardImgOverlay>
                    <div className="backimg">
                    <p>Javascript - React - Reactstrap</p>
                    </div>
                    </CardImgOverlay>
                    </a>
                    </Col>
                    </Row>
                    </Container>

      </div>
      </ScrollableAnchor>

          );
    }
}
 
export default Projets;