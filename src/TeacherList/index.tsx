import React from 'react'
import { Link } from 'react-router-dom'

import './teacherlist.css'

import PageHeader from '../Components/PageHeader/pageHeader'
import TeacherItem from '../Components/TeacherItem/teacherItem'
import Inputs from '../Components/inputs/inputs'
import Select from '../Components/Select/select'


export default function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                <Select 
                        name="subject" 
                        label="matéria" 
                        options={[  {value:'Javascript', label: 'Javascript'},
                                    {value:'React', label: 'React'},
                                    {value:'React-Native', label: 'React-Native'},
                                    {value:'Firebase', label: 'Firebase'},
                                ]}
                    />

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
                    <Inputs type ="time" name="subject" label="Hora"  />
                </form>
           </PageHeader>

           <main>
              <TeacherItem />
              <TeacherItem />
              <TeacherItem />
              <TeacherItem />
           </main>
        </div>
    )
}