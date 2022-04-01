import React from 'react'
import foretnoir from '../assets/img/dessert1-fôret-noire.jpg'
import fraisier from '../assets/img/dessert2-fraisier.jpg'
import fondant from '../assets/img/dessert3-gâteaux-fondant-au-chocolat.webp'
import millefeuilles from '../assets/img/dessert4-mille-feuilles.jpg'
import fruits from '../assets/img/dessert5_fruits.jpg' 
import tartepomme from '../assets/img/dessert6_tarte-pomme.jpg'
import tiramisu from '../assets/img/dessert7_tiramisu.jpeg'
import truffes from '../assets/img/dessert8_truffes.jpg'

export default function Desserts() {

    return(
        <>
        <figure>
            <h2>Forêt noire</h2>
            <img src= {foretnoir} alt= '#'></img>
            </figure>
            <h2>Fraisier</h2>
            <img src= {fraisier} alt= '#'></img>
            <h2>Fondant au Chocolat</h2>
            <img src= {fondant} alt= '#'></img>
            <>Mille Feuilles</>
            <img src= {millefeuilles} alt= '#'></img>
            <title>Salade de Fruits</title>
            <img src= {fruits} alt= '#'></img>
            <title>Tarte au Pomme</title>
            <img src= {tartepomme} alt= '#'></img>
            <title>Tiramisu</title>
            <img scr= {tiramisu} alt= '#'></img>
            <title>Truffes</title>
            <img scr= {truffes} alt= '#'></img>
    
        
        </>
    )
}