export default (state,action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)  //here we wanna send all the data to transactions except the one we deleted
            }
            case 'ADD_TRANSACTION':
                return {
                    ...state,
                    transactions: [action.payload,...state.transactions]
                }
     
        
        default:
            return state;
    }
}