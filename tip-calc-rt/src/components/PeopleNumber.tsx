import { TextField } from '@mui/material'
import { Dispatch } from 'react'
import {SetStateAction} from 'react'
import iconPerson from './images/icon-person.svg'
interface Props {
    setPayersNumber:  Dispatch<SetStateAction<number>>}

export const PeopleNumber = ({setPayersNumber}:Props) =>{

    const people = (e:any)=> {
        const peopleCant = Number(e.target.value)
        // if( isNaN(peopleCant) ){
            // e.target.previousSibling.classList.remove("error2");
            // e.target.value = e.target.value.substring(0, e.target.value.length-1)
        //   } 
        //   else {
            //  e.target.previousSibling.classList.add("error2");
        setPayersNumber(peopleCant)
    }

    return(
        <div className="people-number">
            <span>Number of People</span>
            <p className='error2'>Numeric value needed</p>
            <TextField  onChange={people} className="people-number-input" size='small' style={{width: '274px'}}/>
            <img src={iconPerson} alt='peoplee'></img>
        </div>
    )
}
