import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(res=>{
      setData(res.data.books)
      console.log(data.books)
    })
    .catch(err=>{
      if(err.response.status===404){
        console.log("404 Error")
      }
      else{
        console.log(err)
      }
    })
  },[data.books])

  return (
    <div>
      {data.map((item) => {
        return(
          <div key={item.id}>
            <h3>{item.title}</h3>
            <div className='flex'>
              <img src={item.imageLinks.smallThumbnail} alt="thumbnailImage"></img>
              <p>{item.description}</p>
            </div>
            {item.authors.map((author, index) => {
              return <span key={index}>{author}</span>
            })}
            <hr />
          </div>
        )
      })}
    </div>
  );
}

export default App;
