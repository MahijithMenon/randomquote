import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const App = () => {
  const [data,setData]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
  const tweetNow=()=>{
    window.open(`https://twitter.com/intent/tweet?text=${data.content} -${data.author}`);
  }
  const tumblrNow=()=>{
    window.open(`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,&caption=${data.author}&content=${data.content}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);
  }
  async function fetchServer() {
  const response = await fetch('https://api.quotable.io/random');
  let json = await response.json();
  setData(json);
  setIsLoading(false)
 }
  useEffect(() => {
    fetchServer();
  }, []);
  
  return (
    <div>
    {!isLoading  && (<Card
          bg={'light'}
          key={'light'}
          text={'dark'}
          style={{ width: '30rem', margin:'auto' ,marginTop:'20%'}}
          className="mb-2"
          id="quote-box"
        >
          <Card.Body>
            <Card.Text id="text">
            {data.content}
        </Card.Text>
        <Card.Text style={{marginLeft:"60%"}} id="author">{"-"+data.author}
        </Card.Text>
        <Button variant="success"  onClick={tweetNow} id="tweet-quote" style={{marginLeft:"0%"}} >Twitter</Button>{' '}
        <Button variant="success" onClick={tumblrNow} style={{marginLeft:"0%"}}>Tumblr</Button>{' '}
        <Button variant="success" onClick={fetchServer} id="new-quote" style={{marginLeft:"50%"}}>New Quote</Button>{' '}
          </Card.Body>
        </Card>)} 
    </div> 

  )
}

export default App

