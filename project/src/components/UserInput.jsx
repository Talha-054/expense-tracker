import React, { useState, useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import { useNavigate } from 'react-router-dom'

function UserInput() {

    const navigate = useNavigate();

    const [data, setData] = useContext(DataContext)

    const [message, SetMessage] = useState(false)
    const [errorMessage, SetErrorMessage] = useState(false)
    const [customMsg, setCustomMsg] = useState('');


    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    let [date, SetDate] = useState('')

    let day;
    let month;
    let year;
    let hour;
    let minute;
    let second
    

    function handleTitle(e){
        setTitle(e.target.value)
        SetMessage(false)
        SetErrorMessage(false)
    }

    function handleAmount(e){
        setAmount(e.target.value)
        SetMessage(false)
        SetErrorMessage(false)
    }

    function handleDate(e){
        SetDate(e.target.value)
        SetMessage(false)
        SetErrorMessage(false)
    }

    function handleSubmit(){

        if (title === ''){
            setCustomMsg('Title missing !')
            SetErrorMessage(true)
        }else if (amount === ''){
            setCustomMsg('Amount missing !')
            SetErrorMessage(true)
        }else if (date === ''){
            setCustomMsg('Date missing !')
            SetErrorMessage(true)
        }else {
            try {
                
                date = new Date(date)
                month = date.toLocaleString('default', { month: 'long' });
                year = date.getFullYear();
                day = date.getDay();
                hour = new Date().getHours();
                minute = new Date().getMinutes();
                second = new Date().getSeconds();

                
                
                let obj = {
                month: month,
                year: year,
                day: day,
                title: title,
                amount: parseInt(amount) || 0,
                hour: hour,
                minute: minute,
                second: second
                }
    
                setData([...data || '', obj])
                SetMessage(true)
    
            } catch (e){
                SetErrorMessage(true)
                console.log(e)
            }finally {
    
                setAmount('')
                setTitle('')
                SetDate('')    
                
            }
        }
        

    }


    // function show(){
    //     console.log(data)
    //     navigate('/data')
    // }


 


    return (
        <>
            <section className='p-4 flex h-[80vh] overflow-scroll justify-start items-center flex-col bg-gray-200'>
                <div className='shadow-lg rounded-lg px-6 py-10 flex flex-col w-auto mb-8'>
                    
                        <div className=' my-2 flex flex-col'>
                            <label className='font-medium text-lg' htmlFor="title">Title:  </label>
                            <input  onChange={handleTitle} value={title} id='title' type="text" className='px-4 py-2 w-[215px]' />
                        </div>

                        <div className=' my-2 flex flex-col'>
                            <label className=' font-medium text-lg' htmlFor="amount">Amount: </label>
                            <input onChange={handleAmount} value={amount} id='amount' type="" className='px-4 py-2 w-[215px]' />
                        </div>

                        <div className=' my-2 flex flex-col'>
                            <label className=' font-medium text-lg' htmlFor="date">Date: </label>
                            <input onChange={handleDate} value={date} id='date' type="date" className='px-4 py-2 w-[215px]' />
                        </div>


                        <div className='mb-1  mt-6 flex justify-center items-center'>
                            <button onClick={handleSubmit} className='px-4 py-2 bg-orange-400 rounded-lg text-white hover:bg-orange-500 '>Save</button>
                        </div>     
                </div>

                <div className=''>
                    <h1 className={`bg-green-500 text-white py-4 shadow-lg font-medium text-md rounded-lg px-8 ${message? 'visible' : 'hidden'  }`}>Saved sucessfully !</h1>
                </div>

                <div className='flex justify-center items-center'>
                    <h1 className={`bg-red-500 max-w-[350px] py-4 shadow-lg text-white font-medium text-md rounded-lg px-8 ${errorMessage? 'visible' : 'hidden'  }`}>{customMsg || 'Invalid Entry !'} </h1>
                </div>

                

                

                 
                
            </section>
        </>
    )
}

export default UserInput
