import React from 'react'

const CommonHead = ({Heading}) => {
  return (
    <>
      <div className='text-center'>
        <h1 className=' text-[46px] font-outfit font-bold text-yellow'>{Heading}</h1>
      </div>

    </>
  )
}

export default CommonHead