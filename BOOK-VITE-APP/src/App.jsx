import React from 'react'
import './App.css'
import  './component/Book.css'
import Header from './component/Header'
import Footer from './component/Footer'
const App = () => {
  const bookjs = [
          {
            image: "https://www.bing.com/th/id/OIP.oDLei5tiLD5chvYeZKyiOwHaKa?w=154&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            title: "Physics",
            Price: "345/-"
          },
          {
            image: "https://th.bing.com/th/id/OIP.4sH-8jMvjVtMgfijC4mzCgHaJd?w=178&h=227&c=7&r=0&o=7&pid=1.7&rm=3",
            title: "Chemistry",
            Price: "567/-"
          },
          {
            image: "https://th.bing.com/th/id/OIP.wf39tOpqBA-hXvhoY-4yiQHaJo?w=178&h=232&c=7&r=0&o=7&pid=1.7&rm=3",
            title: "Maths",
            Price: "945/-"
          }
        ]
  return (
    <div>
      <Header/>
      <div className='booklist'>
        {
          bookjs.map((item,index)=>{
            return <div key={index} className='card'>
            <img src= {item.image} width="200" height="200" alt="image" />
            <h3>Title: {item.title}</h3>
            <h4>Price: {item.Price}</h4>
            <button>Add To Cart</button>
            </div>
          }
          )
        }
      </div>
      <Footer/>
    </div>
  )

}

export default App
