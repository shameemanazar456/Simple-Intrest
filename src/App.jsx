
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principal, setPrincipal] =useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest]= useState(0)

//condiotionally render
  const [isPrincipal, setIsPrincipal] =useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const validate =(e)=>{
    const {name, value} = e.target
    console.log(name);
    console.log(value); 

    //regular expression - is used to check the pattern of the string

    if(!!value.match(/^[0-9]*$/)){
      if(name=='principal'){
        setPrincipal(value)
        setIsPrincipal(true)
      }
      else if(name == 'rate'){
        setRate(value)
        setIsRate(true)

      }
      else{
        setYear(value)
        setIsYear(true)
      }

    }
    else{
      if(name=='principal'){
        setPrincipal(value)
        setIsPrincipal(false)
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }

 
  }
   //function to reset
  
   const handleReset =()=>{
    setPrincipal(0)
    setRate(0)
    setYear(0)
    setIsPrincipal(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
   }
 
   //function to calculate simple interest
   const handleCalculate =()=>{
    setInterest((principal *rate*year)/100)
   }

  return (
    <>
      <div className='main'>
          <div className='sub p-4'>
              <h1>Simple Interest App</h1>
             <p>Calculate Your Simple Interest Easily</p>
              <div className='w-100 d-flex justify-content-center align-items-center result rounded mt-4 shadow flex-column'> 
              <h1>₹{interest}</h1>
              <p>Total Simple Interest</p>

              </div>
              <form action="" className='mt-5'>
              <TextField id="outlined-basic" name='principal' value={principal||""} label="₹ Principal Amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
             {!isPrincipal && <p className='text-danger'>Invalide Input</p>}


              <TextField id="outlined-basic" name='rate' value={rate||""} label="Rate of Interest (p.a) %" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)}  />
              {!isRate && <p className='text-danger'>Invalide Input</p>}


              <TextField id="outlined-basic" name='year' value={year ||""} label="Year (yr)" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)}/>
             { !isYear && <p className='text-danger'>Invalide Input</p>}


              <div className='d-flex mt-4'>
              <Button onClick={handleCalculate} className='w-50 p-3 me-3' variant="contained" color='success' disabled={isPrincipal && isRate && isYear ? false :true }>Calculate</Button>
              <Button onClick={handleReset} className='w-50 p-3' variant="outlined" color='primary'>Reset</Button>

              </div>

              </form>
          </div>
      </div>
    </>
  )
}

export default App


/* simple interst = pry/100 */
