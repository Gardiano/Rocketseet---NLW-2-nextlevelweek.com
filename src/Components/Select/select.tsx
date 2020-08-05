

import React, {SelectHTMLAttributes} from 'react'

import './select.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value:string,
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ label, name,options, ...rest }) => {
    return(

        <div className="selected-block">
            <label htmlFor={name}> {label} </label>
            <select>
                <option value="" disabled selected hidden> Selecione uma opção </option>

                {options.map(a => {
                    return <option key={a.value} value={a.value}>  {a.label} </option>
                })}
            </select>
        </div>

    ) 
}
export default Select;