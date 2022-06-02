import { Dispatch } from 'react'
import {SetStateAction} from 'react';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';


interface Props {
    setTipPercent:  Dispatch<SetStateAction<number>> }

export const TipPercent = ({setTipPercent}:Props) =>{
    
    const pickPercent = (e:any)=>{
        const porcento = Number(e.target.value)
        setTipPercent(porcento)
    }
    const writePercent = (e:any) =>{
        const porcento = Number(e.target.value/100)
        setTipPercent(porcento)
    }

    return(
      <div className="percent-tip" onClick={pickPercent}>
        <span>Select Tip %</span>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}><Button value={0.05}>5%</Button></Grid>
          <Grid item xs={2} sm={4} md={4}><Button autoFocus value={0.1}>10%</Button></Grid>
          <Grid item xs={2} sm={4} md={4}><Button value={0.15}>15%</Button></Grid>
          <Grid item xs={2} sm={4} md={4}><Button value={0.25}>25%</Button></Grid>
          <Grid item xs={2} sm={4} md={4}><Button value={0.5}>50%</Button></Grid>
          <Grid item xs={2} sm={3} md={3}>
            <TextField size="small" placeholder="Custom" onInput={writePercent} style={{width: '84px'}}
            /></Grid>
        </Grid>
        {/* <button value={0.05}>5%</button> */}
        {/* <button autoFocus value={0.1}>10%</button> */}
        {/* <button value={0.15}>15%</button> */}
        {/* <button value={0.25}>25%</button> */}
        {/* <button value={0.5}>50%</button> */}
        {/* <input placeholder="Custom" onInput={writePercent} ></input> */}
        {/*  */}
      </div>
    )
}