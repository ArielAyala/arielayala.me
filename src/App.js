import './App.css';
import Particles from "react-particles-js";
import styled from 'styled-components';
import { keyframes } from 'styled-components';


export default function App() {
  return (
    <div className="App" style={styles}>

      <div>
        <Particles
          params={{
            particles: {
              color: {
                value: "#22272e"
              },
              line_linked: {
                color: {
                  value: "#a6afbd"
                }
              },
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            }
          }}
        />

        <AnimatedGradientText>
          I'm Ariel Ayala
        </AnimatedGradientText>
      </div>
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
const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;
