

import React from 'react'

import whatsapp from '../../assets/whatsapp.svg'

import './teacherItem.css'

export default function TeacherItem() {
    return(
        <div>
            <article className="teacher-item">
                <header>
                    <img                           
                        src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/87328527_2648443748586888_4078441059552591872_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=itopICoaOCAAX-58Xox&_nc_ht=scontent-gig2-1.xx&oh=6df754a5d3df11bca927f773f08eef57&oe=5F4E2650"
                        alt="user"
                        />
                    <div>
                        <strong> João Paulo </strong>
                        <span> React js </span>
                    </div>
                </header>

                <p>
                    Programar em reactjs 
                    <br /> <br />
                    é isso ai;
                </p>

                <footer>
                    <p>
                        Preço/Hora 
                        <strong> R$ 100,00 </strong>
                    </p>
                    <button type="button">
                        <img src={whatsapp} alt="WhatsApp" />
                        Entrar em contato.
                    </button>
                </footer>
            </article>
        </div>
    )
}