import React, { useContext } from 'react'
import DisplayCard from './DisplayCard';
import { DataContext } from '../contexts/DataContext';

function Display() {


    const [data] = useContext(DataContext)

   

    
    

    return (
        <>
            <section className='flex bg-gray-200 h-[80vh] overflow-x-hidden overflow-y-auto flex-col  justify-start items-center p-4'>

                <div className='p-4 my-6'>
                    <h1 className='text-black/80 font-bold text-3xl'>Expenses Data</h1>
                </div>


                <div className='rounded-xl p-8'>
                    
                    {
                        
                        data?.map((record, index)=>{
                            return (
                                    <div key={index}>
                                        <DisplayCard title={record.title}
                                                day={record.day} 
                                                month={record.month} 
                                                year={record.year} 
                                                amount={record.amount}
                                                uniqueId={index} />

                                        <p  className='px-4 pb-2 text-black/40'>Created At: {record.hour && <span className='text-black'>{record.hour}:{record.minute}:{record.second}</span>}</p>
                                    </div>
                                    
                            )            
                        })
                    }
                </div>

                
                

            </section>
        </>
    )
}

export default Display;

