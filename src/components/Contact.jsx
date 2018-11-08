import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Contact.css';

class Contact extends Component {

    render() { 
        return (

        <ScrollableAnchor id={'Contact'}>
         <div className="Contact">
        <h1>CONTACT</h1>
        <p className="paragraphe">
📱Passionné par l'univers de l'informatique ainsi que les nouvelles technologies, je me suis tout d'abord dirigé vers le design, puis, ayant soif d'en apprendre plus, j'ai ensuite continué vers le développement web. < br/>

🎮🎧🎩 Mon intérêt pour les jeux-vidéo, la musique et la mode alimente mon esprit sur l'image et le détail.< br/>

🌎 Friand de découvrir le monde, l'univers du numérique étant pour moi universel, le développement informatique ouvre des possibilités intéressantes sur le monde.< br/>

🎓 Titulaire d’un BTS en Design Graphique, je suis actuellement en formation dans le développement web JavaScript REACT à la Wild Code School de Bordeaux.
</p>

      </div>
      </ScrollableAnchor>

          );
    }
}
 
export default Contact;