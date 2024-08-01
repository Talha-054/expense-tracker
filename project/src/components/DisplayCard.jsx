import React from 'react'
import { DataContext } from '../contexts/DataContext';
import { useContext } from 'react';


function DisplayCard({month, year, day, title, amount, uniqueId}) {

    const [data, setData] = useContext(DataContext);

   function deleteRecord (e){
    
        console.log(e.target.id)
        let updatedData = data.splice(e.target.id,1)
        setData([...data])
   }
    return (
        <>
            <div className='flex flex-col p-2 justify-start items-center  w-[420px] lg:w-[800px]  shadow-lg rounded-lg '>

                    <div className='p-2 w-full flex justify-between items-center'>
                        <div className='px-1 flex'>
                            <div className='flex flex-col bg-blue-500 h-24 w-24 justify-center items-center rounded-xl'>
                                <h1 className='font-medium text-white text-xl'>{month}</h1>
                                <h1 className='font-normal text-sm text-white'>{year}</h1>
                                <h1 className='text-3xl font-bold text-white'>{day}</h1>
                            </div>
                            <div className='flex pl-8 justify-center  items-center'>
                                <h1 className=' text-lg lg:text-2xl font-medium text-black/80'>{title}</h1>
                            </div>
                        </div>
                        <div className='px-4 flex  justify-between items-center'>
                            <h1 className='text-lg lg:text-2xl px-4 text-black/90 font-bold '>{amount} $</h1>
                            <span onClick={deleteRecord} id={uniqueId}  className='text-lg hover:scale-125 duration-200 cursor-pointer'>❌</span>
                        </div>

                        
                        

                    </div>
                    
                </div>
        </>
    )
}

export default DisplayCard;
