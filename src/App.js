import React,{useState} from 'react';
import './App.css';

function App() {
   const [ amount, setAmount] = useState('')
   const [fromCurrent, setFromCurrent] = useState('USD')
   const [toCurrent, setToCurrent] = useState('Ksh')
   const exchangeRate = 130; 
  const convertedAmount = parseFloat(amount) * exchangeRate || 0;
   
    const handleAmountChange = (event)=>{
       setAmount(event.target.value)
    }

     const handleFromChange = (event)=>{
       setFromCurrent(event.target.value)
    }
     const handleToChange = (event)=>{
       setToCurrent(event.target.value)
    }
  return (
    
      <div className="App">
      <div>
       <h2>CurrencyConverter</h2>
       <h2> $1 = 130Ksh</h2>
       <label>
         Amount
        <input
          type='number'
          value={amount}
          onChange={handleAmountChange}
        />
       </label>
       
    </div>
    <div>
        <label>From Currency:</label>
        <select value={fromCurrent} onChange={handleFromChange}>
      
          <option value="USD">USD</option>
        </select>
      </div>


    <div>
    <div>
        <label>To Currency:</label>
        <select value={toCurrent} onChange={handleToChange}>
          <option value="Ksh">Ksh</option>
        </select>
      </div>


        <p>
          {amount} {fromCurrent} is approximately {convertedAmount.toFixed(2)}{" "}
          {toCurrent}
        </p>
      </div>

    </div>
   
  );
}

export default App;

// //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// function App() {
//    const [amount,setAmount] = useState('')
//    const [from,setFrom] = useState('USD')
//    const [to,setTo] = useState('KSH')
//    const exchangeRate = 130
//    const currency = parseFloat(amount) * exchangeRate || 0


//    const handleAmountChange = (e)=>{
//       setAmount(e.target.value)
//    }
//    const handleFromChange = (e)=>{
//     setFrom(e.target.value)
//  }
//  const handleToChange = (e)=>{
//   setTo(e.target.value)
// }
//   return (
//     <div className="App">
//       <h2>Amount($1 = 130 KSH)</h2>
//       <div>
//         <input
//            type='number'
//           value={amount}
//           onChange={handleAmountChange}
        
//         />
//       </div>
//       <div>
//         <select value={from}  onChange={handleFromChange}>
//            <option>
//                USD
//            </option>
//         </select>
//       </div>
//       <div>
//         <select value={to}  onChange={handleToChange}>
//            <option>
//                KSh
//            </option>
//         </select>
//       </div>
//       <div>
//          <p> Your currency is {currency.toFixed(2)}{to} from {amount}{from} </p>
//       </div>
//     </div>
//   );
// }


// function App() {
//   const [amount, setAmount] = useState('')
//    const [to, setTo]=useState('KSH')
//     const [from, setFrom]= useState('USD')
//     const currency = parseFloat(amount)*130 || 0
//     const handleAmountChange= (e) =>{
//       setAmount(e.target.value)
//     }
//     const handleFromChange =(e) =>{
//       setFrom(e.target.value)
//     }
//     const handleToChange = (e) =>{
//       setTo(e.target.value)
//     }
   
    
//  return (
//    <main className='App'>
//     <div>
//        <h2>Convert</h2>
//        <input  
//        type="number" 
//        value={amount} 
//        onChange= {handleAmountChange}/>
    
//     </div>
//     <div>
//     <select value={from} onChange={handleFromChange}>
//     <option>
//       USD
//     </option>
//     </select>
//      <div>
//     <select value={to} onChange={handleToChange}>
//     <option>
//       KSH
//     </option>
//     </select>
//     </div>
//     <div>
//       <p>
//        Your currency is {currency.toFixed(2)}{ ' '}{to} from {amount}{from}
      
//       </p>
    
//       </div>
//       </div>
//    </main>
//  );
 
// }
// export default App;

/////////////////////////////////////
////////////////////////////////////////////////