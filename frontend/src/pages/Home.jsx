import React from 'react'
import Hero from '../components/Hero.jsx'
import QuickHighlights from '../components/QuickHighlights.jsx'
import Gallery from './Gallery.jsx'
import Rooms from './Rooms.jsx'
import NearbyPlaces from '../components/NearbyPlaces.jsx'
import Testimonials from '../components/Testimonials.jsx'
import ContactCTA from '../components/ContactCTA.jsx'

const Home = () => {
  return (
    <>
    <Hero />
    <QuickHighlights />
    <Gallery />
    <Rooms /> 
    <NearbyPlaces/>
    <Testimonials/>
    <ContactCTA/>
    </>
  )
}

export default Home