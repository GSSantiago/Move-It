import {useContext} from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/Components/Countdown.module.css';



export function Countdown()
{
    const {minutes, 
        seconds, 
        HasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown} = useContext(CountdownContext)
    

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [SecondLeft, SecondRight] = String(seconds).padStart(2, '0').split('');
     
    return(
<div>
    <div className={styles.countdownContainer}>
        <div>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
            <span>{SecondLeft}</span>
            <span>{SecondRight}</span>
        </div>
    </div>
 
     {HasFinished ? (
        <button
        disabled
        type="button" 
        className={styles.CountdownButton}
     >
        Ciclo encerrado
        </button>
     ) : (
         <>
        { isActive ? 
            (
                <button
                type="button" 
                className={`${styles.CountdownButton}  ${styles.countdownButtonActive}`}
                onClick={resetCountdown}>
            
                 Abandonar ciclo
                </button>
            ) :
            (
                <button
                type="button" 
                className={styles.CountdownButton}
                onClick={startCountdown}>
            
                 Iniciar um novo ciclo
                </button>
            )
        }
        </>
     )
    }

    
</div>
    );
}