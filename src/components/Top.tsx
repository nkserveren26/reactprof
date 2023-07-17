import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'
import background from "../img/IMG_4871.jpg";
import snoopy from "../img/IMG_7330.jpg"
import { Header } from './Header';
import axios from 'axios';

export const Top = () => {
    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: '#ffaaee' },
          { opacity: 1, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 1, color: 'red' },
    });
    const getData = async () => {
      const res = await axios.get("https://jmavkaw0w5.execute-api.ap-northeast-1.amazonaws.com/prod/getdata")
      console.log(res.data);
    };
    const postData = async () => {
      const res = await axios.post("https://wyrp1za853.execute-api.ap-northeast-1.amazonaws.com/prod/postdata",{
        firstName: "三郎",
        lastName: "田中"
      });
      console.log(res);
    };
    return (
        <div className="App">
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
        <button onClick={postData}>click</button>
        </div>
      );
};

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