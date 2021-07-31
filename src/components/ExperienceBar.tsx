import { useContext } from 'react';
import { ChallengeContext } from '../contexts/Challengecontext';
import styles from '../styles/Components/ExperienceBar.module.css'

export function ExperienceBar() {
const {currentExperience, experienceToNextLevel} = useContext(ChallengeContext);
const  percentToNextLevel = Math.round(currentExperience* 100)/ experienceToNextLevel;
//Classname é a class do html
//Css models = classname={styles.current}, faz os estilos css ficarem
//exclusivos aquele escopo, serve para organização
    return(
      
        <header className={styles.experienceBar}>
            <span>@ xp</span>
            <div>
                <div style={{width:`${percentToNextLevel}%`}}/>
                
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>

        </header>

    );
}