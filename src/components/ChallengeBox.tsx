import {useContext} from 'react';
import { ChallengeContext } from '../contexts/Challengecontext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/Components/ChallengeBox.module.css';
import { CompletedChallegens } from './CompletedChallegens';


export function ChallengeBox()
{
const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengeContext)  
const{ resetCountdown} = useContext(CountdownContext)


function handleChallengeSucesso (){
  completeChallenge();
 resetCountdown();
}

function handleChallengeFalho ()
{
 resetChallenge();
 resetCountdown();
}


    return(
        <div className={styles.challengeBoxContainer}>
          {activeChallenge ? (
          <div className={styles.challengeActive}>
              <header>Ganhe {activeChallenge.amount} </header>
              <main>
                  <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                  <strong>Novo desafio</strong>
                  <p>{activeChallenge.description}</p>
              </main>

              <footer>
                  <button 
                  type="button"
                  className={styles.challengeFailedButton}
                  onClick = {handleChallengeFalho}
                  >
                    Falhei 
                  </button>

                  <button 
                  type="button"
                  className={styles.challengeSucessoButton}
                  onClick={handleChallengeSucesso}
                  >
                   Completei
                  </button>
              </footer>

          </div>) : 
          (
            <div className={styles.challengeNotActive}>
            <strong>Inicie um ciclo para receber desafios a serem completados</strong>
            <p>
                <img src="icons/level-up.svg" alt="Level up" />
                Avance de level completando desafios
            </p>

            </div>  
          )}

        </div>
    )
}