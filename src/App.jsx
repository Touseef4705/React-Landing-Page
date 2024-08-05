// import { useState } from 'react'
import './App.css'
import Feature from './Component/feature.jsx';
import Footer from './Component/Footer.jsx';
// import TopHeader from './Component/Header.jsx';
import Header from './Component/Header.jsx';
import Hero from './Component/Hero.jsx';
import Service from './Component/Service.jsx';
import Testimantion from './Component/Testimantional.jsx';
import content from './content/content'


function App() {
  let {header , hero , feature , testimonial , service , footer} = content;

  return (
    <>
    {/* header section */}
    <Header header={header} />

    {/* Hero Section */}
    <Hero hero={hero} />

    {/* Feature Section */}
    <Feature feature={feature} />

    {/* Testimantion Section */}
    <Testimantion testimonial={testimonial} />

    {/* Service Section */}
    <Service service={service} />

    {/* Footer Section */}
    <Footer footer={footer} header={header} />



    </>
  )
}

export default App
