import React, {useRef}from 'react'
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Introduction from './components/introduction'
import Projects from './components/projects'
import Skills from './components/skills'
import Work from './components/work'

const Index = () => {
  const introRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null) 
  const projectsRef = useRef(null)
  const workRef = useRef(null) 

  return (
    <div className='relative h-screen w-screen snap-mandatory snap-y overflow-auto'>
      <div className='snap-start'>
        <Header introRef={introRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} workRef={workRef}/>
      </div>
      <div className='snap-start'>
        <Introduction introRef={introRef}/>
      </div>
      <div className='snap-start'>
        <About aboutRef={aboutRef}/>
      </div>
      <div className='snap-start'>
        <Skills skillsRef={skillsRef}/>
      </div>
      <div className='snap-start'>
        <Projects projectsRef={projectsRef}/>
      </div>
      <div className='snap-start'>
        <Work workRef={workRef}/>
      </div>
      <div className='snap-start'>
        <Footer/>
      </div>
    </div>
  )
}

export default Index