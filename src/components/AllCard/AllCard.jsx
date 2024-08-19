import React, { useContext } from 'react'
import './AllCard.css'
import { StoreContext } from '../../Context/StoreContext'
import Cour from '../Cour/Cour'
import { Link } from 'react-router-dom'

const AllCard = ({category}) => {
    const {fullcourses_list} = useContext(StoreContext)
  return (
    <div>
       <div className='courses-display' id='courses-display'>
        <h2>Explore our premium Courses</h2>
       <div className="course-display-list">
        {course_list.map((item,index)=>{
            return <Cour key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        })}
       </div>
     </div>
    </div>
  )
}

export default AllCard
