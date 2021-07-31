import { useContext } from 'react';
import { ChallengeContext } from '../contexts/Challengecontext';
import styles from '../styles/Components/CompletedChallenge.module.css';

export function CompletedChallegens()
{
    const {challengesCompleted} = useContext(ChallengeContext);
    return(
        <div className={styles.CompletedChallegensContainer}>
            <span>Desafios Completos</span>
            
            <span>{challengesCompleted}</span>
        </div>
    )
}