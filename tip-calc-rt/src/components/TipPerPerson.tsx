interface Props {
    bill:  number,
    payersNumber:  number,
    tipPercent: number
}

export const TipPerPerson = ({bill, payersNumber, tipPercent}:Props) =>{
    if( payersNumber === 0 || bill === 0){
        return ( 
          <div className="tip-per-person">
            <div>
               <span>Tip Amount</span>
               <span>/ person</span>
            </div>
            <output>{"$0.00"}</output>
          </div>)}
    return(
        <div className="tip-per-person">
            <div>
               <span>Tip Amount</span>
               <span>/ person</span>
             </div>
             <output>{"$"+(tipPercent*bill/payersNumber).toFixed(2)}</output>
        </div>
    )
}