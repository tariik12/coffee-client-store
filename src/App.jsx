
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './comonents/CoffeeCard'
import { useState } from 'react'



function App() {

const loaderCoffees = useLoaderData()
console.log(loaderCoffees)

const [coffees,setCoffees] = useState(loaderCoffees)
console.log(coffees)

  return (
    <div className='m-20'>
      
      <h1 className='text-6xl text-center my-20 text-purple-600'>Black Hot Coffee {coffees.length}</h1>

    <div className='grid md:grid-cols-2 gap-4'>
    {
        coffees.map(coffee =><CoffeeCard  
        
        key={coffee._id} 
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        >

      
        </CoffeeCard>)
      }
    
    </div>
    </div>
  )
}

export default App
