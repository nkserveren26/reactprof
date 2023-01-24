import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { useSpring, useTrail,animated,a, config } from 'react-spring'
import background from "./img/IMG_4871.jpg";
import snoopy from "./img/IMG_7330.jpg"

/*
const Trail: React.FC<{ open: boolean }> = ({ open}) => {
  const msg = "Welcome to My Profile Page.";
  const trails = useTrail(msg.length, {
    config: { tension: 5000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 0,
    height: open ? 100 : 0,
    from: { opacity: 0, x: 0, height: 0 },
  })
  return (
    <div>
      {trails.map((trail, idx) => (
        <animated.span style={{ ...trail, paddingLeft: idx * 0.5 }}>
          {msg[idx]}
        </animated.span>
      ))}
    </div>
  )
}
*/

function App() {
  const [open, set] = useState(true);
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 1, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 1, color: 'red' },
  });
  return (
    <div className="App">
      <SDiv>
      <h1>My Profile</h1>
      <ul>
        <li>Top</li>
        <li>About</li>
        <li>Work</li>
      </ul>
      </SDiv>
      <SDivTop>
        <div className='snoopy'>
          <img src={snoopy}></img>
          <animated.div style={styles}>I will fade in and out</animated.div>
        </div>
        <div className='mysummary'>
          <h1>IT Engineer</h1>
          <h2>N.K</h2>
          <p>インフラ周りの仕事をメインでやってます。<br />
            （VM、Linux、AWSなど）<br />
            プライベートは資格の勉強したり、コード書いたりしてます。<br />
          </p>
        </div>
      </SDivTop>
    </div>
  );
};

const SDiv = styled.div`
display:flex;
align-items: center;
background-color: black;
font-family: Georgia, serif;
h1 {
  margin-left: 2%;
  color: white;
}
ul {
  display: flex;
  list-style:none;
  margin-left:30%;
  color: white;
  li {
    margin-left:40px;
    font-size: 18px;
  }
}
`;

const SDivTop = styled.div`
position: relative;
z-index: 1;
display: flex;
column-gap: 5px;
background-image: url(${background});
background-size: cover;
height: 700px;
::after {
  content: "";
  position: absolute;
  z-index: 2;
  width: 100%;
  height:100%;
  top: 0;
  left: 0;
  background-color: white;
  opacity: 0.5;
}
.snoopy {
  position: relative;
  z-index: 3;
  top: 15%;
  left: 10%;
  height: 300px;
  width: 400px;
  margin: 0;
  img {
    width: 100%;
  }
}
.mysummary {
  position: relative;
  z-index: 3;
  top: 15%;
  left: 20%;
  height: 60%;
  h1 {
  font-family: 'Courier New', Courier, monospace;
  margin: 0;
  font-size: 50px;
  }
  h2 {
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    font-size: 110px;
  }
  p {
    margin: 0;
    font-weight: bold;
  }
}
`;



export default App;
