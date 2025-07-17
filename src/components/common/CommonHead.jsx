import React from 'react'

const CommonHead = ({Heading}) => {
  return (
    <>
      <div className='text-center'>
        <h1 data-aos="fade-up" data-aos-duration="1500" className=' text-[46px] font-outfit font-bold text-yellow'>{Heading}</h1>
      </div>

    </>
  )
}

export default CommonHead