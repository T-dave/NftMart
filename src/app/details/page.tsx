import React from 'react'
import NavBar from '../components/navBar'
import Overline3 from '../components/overline3'
import Footer from '../components/footer'
import DetailCard from '../components/detailCard'

const Details = () => {
  return (
    <div>
      <NavBar/>
      <div className="mx-32 py-10"><DetailCard/></div>
      <Overline3 text = {"More form this author"}/>
      <div className="px-20 py-10"><Footer/></div>
    </div>
  )
}

export default Details