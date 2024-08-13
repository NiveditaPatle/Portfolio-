import React from 'react'
import './Services.css'
import ServicesData from '../../assets/services-data'

const Services = () => {
  return (
    <div id="services" className='services'> 
      <div className='services-title'>
        <h1>Services</h1>
      </div>
      <div className='services-container'>
        {
            ServicesData.map((service, index) => {
                return <div key={index} className='services-format'>
                    <h3><service.s_icon/></h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_description}</p>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Services
