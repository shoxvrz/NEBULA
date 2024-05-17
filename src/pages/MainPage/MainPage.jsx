import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import useGetData from '../../hooks/useGetData'
import './MainPage.scss'

const MainPage = () => {
  const {data} = useGetData()

  console.log(data);

  return (
    <div className='main'>
      <Navbar/>
      <div className="main__cards">
        {
          data.map((product, i) => (
            <Card key={i} {...product} />
          ))
        }
      </div>
      </div>
  )
}

export default MainPage