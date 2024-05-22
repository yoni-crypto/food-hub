import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {Food_list}=useContext(StoreContext)
  
    const filteredFoodList = Food_list.filter(item => category === "All" || category === item.category);
  
  return (
    <div className='food-display' id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {filteredFoodList.length > 0 ? filteredFoodList.map((item,index)=>{
                return <FoodItem key={index} _id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }) : <p>No food list for this category</p>}
        </div>
    </div>
  )
}

export default FoodDisplay
