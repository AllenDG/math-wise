import React from 'react'

import "../home/home.css"
import Button from '../../components/reusable/Button'
import Content_home from './Content_home'



const Home = () => {
  return (
    <div className='Container'>
      <div className='Container-header'>
      <div className='Header'>
        <p>WELCOME TO MATH WISE</p>
        <h1 className='tagDesc'>The Math Learning Platform for Children</h1>
      </div>
      <Button/>
      </div>
      <Content_home/>
    </div>

   
    
  )
}

export default Home