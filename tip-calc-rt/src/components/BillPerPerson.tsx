interface Props {
    bill:  number,
    payersNumber:  number
}

export const BillPerPerson = ({bill, payersNumber}:Props) =>{
    if( payersNumber === 0 || bill === 0){
        return ( 
            <div className="bill-per-person">
            <div>
               <span>Total</span>
               <span>/ person</span>
             </div>
             <output>{"$0.00"}</output>
        </div>)}
    return(
        <div className="bill-per-person">
            <div>
               <span>Total</span>
               <span>/ person</span>
             </div>
             <output>{"$"+(bill/payersNumber).toFixed(2)}</output>
        </div>
    )

}