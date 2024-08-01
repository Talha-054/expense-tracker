import React, { useState } from 'react'
import { DataContext } from '../contexts/DataContext'
import { useContext } from 'react'

function Detail() {

    const [data, setData] = useContext(DataContext);
    const [monthlyLimit, setMonthlyLimit] = useState('' || 500)
   
    const [monthlyExpense, setMonthlyExpense] = useState([
        {name:'january', total:0},
        {name:'feburary', total:0},
        {name:'march', total:0},
        {name:'april', total:0},
        {name:'may', total:0},
        {name:'june', total:0},
        {name:'july', total:0},
        {name:'august', total:0},,
        {name:'september', total:0},
        {name:'october', total:0},
        {name:'november', total:0},
        {name:'december', total:0},
    ])

    const years = [2020,2021,2022,2023,2024]


    function handleSelect (e){
        

        let filteredArr = data.filter((record)=> record.year == e.target.value)

        let updatedArr = monthlyExpense.forEach((obj)=>{
            if (obj){
                obj.total = 0
            }
        })
        
        filteredArr.forEach((record)=>{
            monthlyExpense.forEach((obj)=>{
                if (obj && obj.name == record.month.toLowerCase()){
                    obj.total += record.amount
                }
            })
        })
        setMonthlyExpense([...monthlyExpense])
        console.log(monthlyExpense)
        
    }


    function handleMonthlyLimit (e){
        setMonthlyLimit(e.target.value)
    }
        

    return (
        <>
            <section className='h-[80vh] flex flex-col justify-start items-center p-8 overflow-x-hidden overflow-y-auto bg-gray-200'>

                <div className="filter flex flex-col lg:flex-row justify-center my-2 items-center">
                    <label className='p-2 text-lg font-normal text-black' htmlFor="filter">Filter by Year</label>
                    <select onChange={handleSelect} className='px-2 mr-4 py-1 rounded-lg' name="filter" id="">
                        {years.map((year,index)=>{
                            return (<option key={index} value={year} className='px-2 py-1'>{year}</option>)
                        })}

                    </select>

                    <label className='p-2 text-lg font-normal text-black' htmlFor="filter">Monthly Limit</label>
                    <input onChange={handleMonthlyLimit} value={monthlyLimit} className='px-2 py-1 rounded-lg' placeholder='default: 500'></input>
                </div>

                <section className="bars p-4 grow flex justify-center items-center ">
                        <div className='flex bg-gray-300 justify-center flex-wrap rounded-xl gap-6 max-w-[846px] shadow-xl items-center '>
                            {
                                monthlyExpense.map((month,index)=>{
                                     if (month === undefined){return ''}
                                    return (
                                        <div key={index} className='flex flex-col p-4 m-2 justify-center items-center break-words'>
                                            <h2 className='font-bold  my-3'>{month?.name.toUpperCase()}</h2>
                                            <div style={{backgroundImage: `linear-gradient(to top, black ${((month?.total)/monthlyLimit)*100}%, white 0%)`}} className= ' h-32 w-4 rounded-full '></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </section>

            </section>
        </>
    )
}

export default Detail
