import React from 'react'
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Introduction from './components/introduction'
import Projects from './components/projects'
import Skills from './components/skills'
import Work from './components/work'

const Index = () => {
  return (
    <div>
      <Header/>
      <Introduction/>
      <About/>
      <Skills/>
      <Projects/>
      <Work/>
      <Footer/>
    </div>

  )
}

export default Index