import React from 'react'

function Welcome() {
    const hour=new Date().getHours();
    const greet=hour<12?"Good Morning":hour<17? "Good Afternoon" : "Good Evening"
  return (
    <div>
      {greet}
    </div>
  )
}

export default Welcome
