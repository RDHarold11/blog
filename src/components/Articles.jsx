import React, { useEffect, useLayoutEffect, useState } from 'react'
import Article from './Article'
import axios from "axios"

const Articles = () => {
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    try {
      const res = await axios.get("http://localhost:5500/api/articles/getArticles")
      setArticles(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useLayoutEffect(() => {
    fetchArticles()
  }, [])

  return (
    <section className='max-w-[1400px] px-[80px] mx-auto bg-[#F6F6FF]'>
        <h2 className='text-[18px] mb-3 font-semibold'>Must Read Articles: </h2>
        <div className='grid lg:grid-cols-4 gap-6 w-full items-center justify-center sm:grid-cols-2'>
          {
            articles.length > 0 && (
              articles.map((article) => (
                <Article key={article._id} {...article}></Article>
              ))
            )
          }
        </div>
    </section>
  )
}

export default Articles