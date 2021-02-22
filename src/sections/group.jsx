import React from 'react'
import { Field } from 'react-final-form'
import './group.scss'
import img from '../img/delete.png'
const required = value => (value ? undefined : 'Required')
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)


export const Group =(props)=>{

    let generalsComponents = props.generals.map(c=> <div > <span>{"title "+c}</span> <br/>
                            <Field  name={'titel'+c+props.group} validate={composeValidators(required, minValue(18))}>
                                    {({ input, meta }) => (
                                    <div >
            
                                        <input class="fild" {...input} type="text" placeholder="placeholder" />
                                        {meta.error && meta.touched && <span class="error">{meta.error}</span>}
                                    </div>
                                    )}
                            </Field>
                                                    </div> )
    let deleteGroup=()=>{
        props.deleteGroup(props.group)
    }
    
    return <div class="group">
                    <div > 
                                <div><span>{"title1"}</span><br/> 
                                    <Field name={'titel'+props.group} validate={composeValidators(required, minValue(18))}>
                                        {({ input, meta }) => (
                                        <div >
                                            <input class="fild_gl" {...input} type="text" placeholder="placeholder" />
                                            {meta.error && meta.touched && <span class="error">{meta.error}</span>}
                                        </div>
                                        )}
                                    </Field>
                                </div>
                                <div class="general">
                                        {generalsComponents}
                                </div>
                             
                            
                    </div>
                  <img onClick={deleteGroup}  src={img} alt=""/>
            </div>
}
