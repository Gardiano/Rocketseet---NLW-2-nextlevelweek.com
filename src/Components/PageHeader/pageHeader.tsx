
import React from 'react';

import { Link } from 'react-router-dom'

import './pageHeader.css'

import logoImg from '../../assets/logo.svg'
import backIcon from '../../assets/back.svg'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader:React.FC<PageHeaderProps> = (props) => {
    return (
        <div>
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="voltar" />
                    </Link>
                    <img src={logoImg} alt="proffy" />
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>  
                   {props.description && <p> {props.description} </p>}
                    {props.children}
                </div>
                
            </header>
        </div>
    );
}

export default PageHeader;