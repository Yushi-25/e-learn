import React, { useContext } from 'react'
import './Cards.css'
import { StoreContext } from '../../Context/StoreContext'
import Cour from '../Cour/Cour'
import { Link } from 'react-router-dom'
const Cards = ({category}) => {

    const {course_list} = useContext(StoreContext)




  return (
    <div className='courses-display' id='courses-display'>
        <h2>On demand Courses</h2>
       <div className="course-display-list">
        {course_list.map((item,index)=>{
            return <Cour key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        })}
       </div>
       <div className="explore">
        <Link to='/Courses' /*onClick={()=>setMenu("Courses") }*/><button>Explore More</button></Link>
       </div>
    </div>
  )
}
export default Cards
