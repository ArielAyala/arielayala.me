import './App.css';
import styled from 'styled-components';
import { keyframes } from 'styled-components';


export default function App() {
  return (
    <div className="App" style={styles}>
      <br></br>
      <br></br>
      <PhotoProfile src='https://avatars.githubusercontent.com/u/24866324?v=4' />
      <br></br>
      <br></br>
      <Title>
        Hello, I'm <AnimatedGradientText>Ariel Ayala</AnimatedGradientText>
      </Title>
    </div>
  );
}

const styles = {
  backgroundColor: '#22272e',
  height: '100vh'
}

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

const PhotoProfile = styled.img`
  border-radius: 50%;
  max-width: 200px;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 16px;
`;

const AnimatedGradientText = styled.span`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 18px;
  overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;
