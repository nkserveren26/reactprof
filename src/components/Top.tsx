import styled from 'styled-components';
import background from "../img/IMG_4871.jpg";
import snoopy from "../img/IMG_7330.jpg"

export const Top = () => {
    return (
        <div className="App">
          <SDivTop>
            <div className='snoopy'>
              <img src={snoopy}></img>
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