import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const course = {name: 'Half Stack application development',
   parts: [ 
    { 
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    } 
  ]
}

  const Header = ( {course} ) => {

    // const nom = course.name
    return <h1> { course.name } </h1>
}
  const Content = ( {course}  ) => {
    return <>
      <p> { course.parts[0].name } { course.parts[0].exercises }</p>
      <p> { course.parts[1].name } { course.parts[1].exercises }</p>
      <p> { course.parts[2].name } { course.parts[2].exercises }</p>
    </>
  }
  const Total = ( {course} ) =>{
  
    return <>
    <p> The total is: {course.parts[0].exercises+ course.parts[1].exercises + course.parts[2].exercises}</p>
    </>
    return 
  }

  return (
    <>
    <Header course = {course}></Header>
    <Content course = { course }></Content>
    <Total course = {course}></Total>
      {/* <div>
        { parts[0].name } { parts[0].exercises } 
      </div> */}
      {/* <div>
        { parts[1].name } { parts[1].exercises } 
      </div>
      <div>
        { parts[2].name } { parts[2].exercises } 
      </div> */}
      
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
