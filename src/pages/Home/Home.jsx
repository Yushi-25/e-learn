import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Cards from '../../components/Cards/Cards'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  return (
    <div>
      <Header/>
      <Cards/>
      <AppDownload/>
    </div>
  )
}

export default Home
