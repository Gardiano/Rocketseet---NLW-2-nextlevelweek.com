
import React from 'react'
import { Link } from 'react-router-dom'

import './landing.css'

import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg'
import studyIcon from '../../assets/study.svg'
import giveClassIcon from '../../assets/give-classes.svg'
import purpleHeartIcon from '../../assets/purple-heart.svg'

export default function Landing() {
    return (
       <div id="page-landing">
           <div id="page-landing-content" className="container">
               <div id="logo-container">
                   <img src={logoImg} alt="Proffy" />   
                   <h2> Sua plataforma de estudos online! </h2>
               </div>

               <img 
                src={landingImg} 
                alt="Plataforma de estudos" 
                className="hero-image"
               />

               <div className="buttons-container">
                   <Link to="/study" className="study" >
                       <img src={studyIcon} alt="estudar" />
                       Estudar
                   </Link>

                   <Link to="/give-classes" className="give-classes" >
                       <img src={giveClassIcon} alt="dar aulas" />
                       Dar Aulas
                   </Link>
               </div>
                <div className="total-connections">
                    total de 200 conexões já realizadas.
                    <img src={purpleHeartIcon} alt="coração"/>
                </div>
           </div>
       </div>
    )
}