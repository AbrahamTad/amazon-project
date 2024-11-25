import numeral from"numeral"


const CurrencyFomat = ({amount}) =>{
    const formattedAmount = numeral(amount).format("$0,0.00")
    return <div>{formattedAmount}</div>
}

export default CurrencyFomat;