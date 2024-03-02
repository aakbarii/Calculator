import React, { useState } from 'react'
import './Cal.css'
import { evaluate } from 'mathjs'

function Cal() {

    let [result , setResult] = useState('')
    let [hasDot , setHasDot] = useState(false)

    let opt = ['-' , '+' , '*' , '/'] 

    const check = (text) =>{
        if(text === '÷') return '/'
        if(text === '×') return '*'
        return text
    }

    const clickHandler = (e) => {
        let input = check(e.target.innerText)
        if(input === '.' ){
            if(hasDot === true) return

                else{
                    setHasDot(true) 
            }
        } 
        if(opt.includes(input)){
            setHasDot(false)
        }

        setResult(result + input)
    }

    const clearBtn = () => {
        setResult("")
        setHasDot(false)
    }

    const deletbtn = () => {
        setResult(result.slice(0,-1))
        if(result.endsWith('.')){
            setHasDot(false)
        }
    }
    const equalBtn = () =>{
        setResult(String(evaluate(result)))
        setHasDot(false)
    }
    
  return (
    <div>
      <div className="container">
        <div className="screen">{result}</div>
            <div className="buttons">
                <button onClick={clearBtn} className='color tow'>Clear</button>
                <button onClick={deletbtn} className='color'>C</button>
                <button onClick={clickHandler} className='color'>÷</button>
                <button onClick={clickHandler}>7</button>
                <button onClick={clickHandler}>8</button>
                <button onClick={clickHandler}>9</button>
                <button onClick={clickHandler} className='color'>×</button>
                <button onClick={clickHandler}>4</button>
                <button onClick={clickHandler}>5</button>
                <button onClick={clickHandler}>6</button>
                <button onClick={clickHandler} className='color'>-</button>
                <button onClick={clickHandler}>1</button>
                <button onClick={clickHandler}>2</button>
                <button onClick={clickHandler}>3</button>
                <button onClick={clickHandler} className='color'>+</button>
                <button onClick={clickHandler}>0</button>
                <button onClick={clickHandler}>.</button>
                <button onClick={equalBtn} className='color tow'>=</button>
            </div>
       </div>
    </div>
  )
}

export default Cal
