import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className='container'>
          <div className='p-5 text-center bg-light-dark rounded'>
              <h1 className='text-light'>Stock Prediction Portal</h1>
              <p className='text-light lead'>Our Stock Prediction Portal combines data analytics, AI models, and expert insights to help you make smarter investment decisions. Track trends, analyze stock behavior, and optimize your portfolio—all in one place.</p>
              <Button text = 'Login' class = 'btn-outline-primary'/>
          </div>
      </div>
    </>
  )
}

export default Main