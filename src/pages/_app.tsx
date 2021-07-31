import '../styles/global.css'
import { ChallegensProvider } from '../contexts/Challengecontext'
import { CountdownProvider } from '../contexts/CountdownContext';


function MyApp({ Component, pageProps }) {
  return (
  <ChallegensProvider>
    
      <Component {...pageProps} />
  </ChallegensProvider>
  );
}

export default MyApp

