import React from 'react'
import { Form} from 'react-final-form'
import {Group} from './group'
import  './section.scss'

const Section =(props)=>{
        let [group,editGroup]=React.useState([1,2])
        let [titel,edittitel]=React.useState([])
        React.useEffect(()=>{
            let mas =[]
            for (let i=2;i<props.titel+2;i++)
            {
                mas.push(i)
            }
            edittitel(mas)
        },[props.titel])

        React.useEffect(()=>{
            let mas =[]
            for (let i=0;i<props.minGroup;i++)
            {
                mas.push(i)
            }
            editGroup(mas)
        },[props.minGroup])

        let onSubmit=(values)=>{
            console.log(values)
        }
        let addGroup = ()=>{
            if (group.length!==props.maxGroup)
            {
                let mas =[...group,group.length+1]
                editGroup(mas)
            }
            else
                alert("error MAX group 3")
         
        }
        let deleteGroup=(element)=>{
            if (group.length!==props.minGroup)   
            {
                let newMas=group.filter(c => c!==element)        
                editGroup(newMas)
            }
            else
                alert("error MIN group 1")  
        }

        let groupsComponents = group.map(c=><Group generals={titel}  deleteGroup={deleteGroup} group={c}c/>)
        
    return <div >
                <span class="sectionName"> Seaction {props.seaction} </span> 
                <div class="section">
                    <Form
                        onSubmit={onSubmit}
                        render={({ handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
                                            {groupsComponents}
                                        <div class="butns">
                                            <button class="but"  onClick={addGroup}>Add Group</button>
                                            <button class="but" type="submit">Submit</button>
                                        </div>
                                    </form>
                                )}
                    />
                </div>
            </div>

}
export default  Section;