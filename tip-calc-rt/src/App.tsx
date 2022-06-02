import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Bill } from "./components/Bill";
import { BillPerPerson } from "./components/BillPerPerson";
import { PeopleNumber } from "./components/PeopleNumber";
import { TipPercent } from "./components/TipPercent";
import { TipPerPerson } from "./components/TipPerPerson";

export const App = () => {

  const [bill, setBill] = useState(0)

  const [payersNumber, setPayersNumber] = useState(1)

  const [tipPercent,setTipPercent] = useState(0.15)

  const reset = () => window.location.reload();

  return (
   <>
    <div className="App">
      <h3 className="spli">SPLI</h3>
      <h3 className="tter">TTER</h3>
      <Box sx={{
        width: 730,
        height: 380,
        display: 'flex',
        justifyContent:'space-between',
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 3,
        }} >
        <Box sx={{
        width: 310,
        height: 310,
        padding: 2,
        backgroundColor: 'white',
        borderRadius: 3,
        }} >
          <Bill setBill={setBill}/> 
          <TipPercent setTipPercent={setTipPercent}/>
          <PeopleNumber setPayersNumber={setPayersNumber}/>
        </Box>
        <Box sx={{
        width: 310,
        height: 310,
        padding: 5,
        backgroundColor: 'hsl(186, 14%, 43%)',
        borderRadius: 3,
        }} >
          <BillPerPerson bill={bill} payersNumber={payersNumber}/>
          <TipPerPerson bill={bill} payersNumber={payersNumber} tipPercent={tipPercent}/>
          <Button 
          onClick={reset} variant='contained' style={{width: '230px', marginTop:'80px', backgroundColor:'hsl(172, 67%, 45%)'}}>RESET</Button>
        </Box>
      </Box>
    </div> 
   </>
  );
}

export default App;
