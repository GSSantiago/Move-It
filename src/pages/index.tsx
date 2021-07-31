import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallegens } from '../components/CompletedChallegens';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/profile'
import { CountdownProvider } from '../contexts/CountdownContext';



import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move It</title>
      </Head>
      <ExperienceBar/>
      <CountdownProvider>
      <section>
        <div>
         <Profile/>
         <CompletedChallegens/>
         <Countdown/>
        </div>

        <div>
         <ChallengeBox/>
        </div>
      </section>
      </CountdownProvider>
    </div>
  )
}


