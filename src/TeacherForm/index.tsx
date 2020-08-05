
import React from 'react'
import './teacherForm.css';

import PageHeader from '../Components/PageHeader/pageHeader'
import Inputs from '../Components/inputs/inputs';

import warningIcon from '../assets/warning.svg'
import Textarea from '../Components/Textarea/text';
import Select from '../Components/Select/select';

export default function TeacherForm() {
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
                        description="O primeiro passo é preencher os itens abaixo."
            />

            <main>

                <fieldset>
                    <legend> Seus dados </legend>
                    <Inputs name="subject" label="matéria" />
                    <Inputs name="avatar" label="avatar" />
                    <Inputs name="whatsapp" label="whatsapp" />   
                    <Textarea name="bio" label="biografia"> </Textarea>
                </fieldset>

                <fieldset>
                    <legend> Sobre a aula </legend>
                    <Select 
                        name="subject" 
                        label="matéria" 
                        options={[ {value:'Javascript', label: 'Javascript'},
                                    {value:'React', label: 'React'},
                                    {value:'React-Native', label: 'React-Native'},
                                    {value:'Firebase', label: 'Firebase'},
                                ]}
                    />
                </fieldset>

                <fieldset>
                    <legend> Horários Disponíveis </legend>
                    {/* <button type="button"> + Novo Horário </button> */}
                </fieldset>
                
                <div className="schedule-item">
                    <Select 
                        name="subject" 
                        label="Dia Da Semana" 
                        options={[  {value:'0', label: 'Domingo'},
                                    {value:'1', label: 'Segunda-feira'},
                                    {value:'2', label: 'Terça-feira'},
                                    {value:'3', label: 'Quarta-feira'},
                                    {value:'4', label: 'Quinta-feira'},
                                    {value:'5', label: 'SextA-feira'},
                                    {value:'6', label: 'Sábado'},
                                ]}
                    />
                    <Inputs name="from" label="Das" type="time"  />
                    <Inputs name="to" label="Até" type="time"  />
                </div>

                <footer>
                    <p>
                        <img src={warningIcon} alt="importante" /> 
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button"> Salvar cadastro! </button>
                </footer>
            </main>


        </div>
                    
    )
}