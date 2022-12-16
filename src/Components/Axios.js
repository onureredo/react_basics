import React, {useState} from 'react'
import axios from 'axios';


function Axios() {
    
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  // const [tags, setTags] = useState('');

  const fetchData = () => {
    axios.get(`https://api.quotable.io/random`)
    .then(res => {
      // console.log(res)
      setContent(res.data.content)
      setAuthor(res.data.author)
      // setTags(res.data.tags)
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div className='axios'>
        <h1>{author}</h1>
        <h4><i>{content}</i></h4>
        {/* <p>{tags}</p> */}
        <button className='btn_green' onClick={fetchData}>FETCH</button>
    </div>
  )
}

export default Axios