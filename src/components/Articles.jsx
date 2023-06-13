import React from 'react'
import Article from './Article'

const Articles = () => {
  return (
    <section className='max-w-[1400px] px-[80px] mx-auto bg-[#F6F6FF]'>
        <h2 className='text-xl mb-3 font-semibold'>Must Read Articles: </h2>
        <div className='grid lg:grid-cols-4 gap-6 w-full items-center justify-center sm:grid-cols-2'>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
            <Article></Article>
        </div>
    </section>
  )
}

export default Articles