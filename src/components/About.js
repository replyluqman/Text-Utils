import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

export default function About() {
 
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: 'white 1px solid'
  })
  const [btn, setBtn] = useState('Enable Dark Mode')
const changeState=()=>{
  if(myStyle.color === 'black'){
    console.log('white')
    setMyStyle({
      color:'white',
      backgroundColor: 'black',
      border: 'white 1px solid',
    
    })
    setBtn('Enable white Mode');
  }
  else{
    setMyStyle({
      color: 'black',
      backgroundColor: 'white',
      
    })
    setBtn('Enable Dark Mode');
  }
}

  return (
    
<>
    <div className="container my-3 "style={myStyle} >
    <div className="accordion accordion-flush py-3" id="questions">
      {/* <!-- Item 1 --> */}

      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" >
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#question-one" style={myStyle}
          >
            Where Are You Exactly Located ?
          </button>
        </h2>
        <div
          id="question-one"
          className="accordion-collapse collapse"
          data-bs-parent="questions"
        >
          <div className="accordion-body" style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus tenetur dicta provident veniam officia perferendis sit
            optio fuga, consequuntur eaque.
          </div>
        </div>
      </div>
      {/* <!-- Item 2 --> */}
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button style={myStyle} 
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#question-two"
          >
            Who can Join ?
          </button>
        </h2>
        <div
          id="question-two"
          className="accordion-collapse collapse"
          data-bs-parent="questions"
        >
          <div className="accordion-body" style={myStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae dicta similique iste aut recusandae itaque nulla!
            Libero quae tempora, ipsum quam, beatae, nesciunt earum possimus
            placeat maiores repellat porro suscipit. Neque, fuga facere eum
            nisi, laboriosam earum non molestias ad blanditiis illum quae
            dolorum maxime recusandae. Facilis fugit iusto quidem!
          </div>
        </div>
      </div>
      {/* <!-- Item 3 --> */}
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
          <button style={myStyle}
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#question-three"
          >
            How can I Sign up ?
          </button>
        </h2>
        <div
          id="question-three"
          className="accordion-collapse collapse"
          data-bs-parent="questions"
        >
          <div className="accordion-body" style={myStyle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolorem eius a quae, temporibus eum officia architecto deleniti
            voluptatum, laudantium molestias libero perferendis sequi odio
            incidunt neque nemo cupiditate commodi error.
          </div>
        </div>
      </div>
      {/* <!-- Item 3+1 --> */}
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" >
          <button style={myStyle}
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#question-four"
          >
            How Much Does It Cost to Attend ?
          </button>
        </h2>
        <div
          id="question-four"
          className="accordion-collapse collapse"
          data-bs-parent="questions"
        >
          <div className="accordion-body" style={myStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            accusamus! Animi officia, eligendi vero, sint sunt delectus
            doloremque laborum cupiditate aliquam ex dolorem porro, omnis
            nulla veniam distinctio exercitationem illum?
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
  <button className="btn btn-primary" onClick={changeState}>{btn}</button>
  </div>
   </>
  )
}
