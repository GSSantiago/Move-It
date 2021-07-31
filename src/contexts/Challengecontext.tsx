import {createContext, useState, ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json';

interface challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallegensContextData{
    level: number;
    currentExperience: number; 
    levelUp: () => void;
    challengesCompleted: number;
    startNewChallenge: () => void;
    activeChallenge: challenge;
    resetChallenge: ()=>void;
    experienceToNextLevel: number;
    completeChallenge: () => void;
    
}

interface ChallegensProviderProps
{
    children: ReactNode; 
}

export const ChallengeContext = createContext({} as ChallegensContextData);

export function ChallegensProvider({ children }:ChallegensProviderProps)
{

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setCHallengesCompleted]= useState(0);
    const[activeChallenge, setActivateChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1)*4,2);

    useEffect(()=>{
        Notification.requestPermission();
    }, [])

    function levelUp()
    {
        setLevel(level + 1);
    }

    function startNewChallenge()
    {
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length); 
      const challenge = challenges[randomChallengeIndex];
      
      setActivateChallenge(challenge)

      new Audio('/notification.mp3').play();

      if(Notification.permission == 'granted')
      {
          new Notification('Novo desafio :D', {body: 
            `Valendo ${challenge.amount}xp!`})
      }
    }

    function resetChallenge()
    {
        setActivateChallenge(null);
    }

    function completeChallenge()
    {
     if(!activeChallenge)
     {
         return;
     }
     const {amount} = activeChallenge;

     let finalExperience = currentExperience + amount;

     if(finalExperience >= experienceToNextLevel)
     {
         finalExperience = finalExperience - experienceToNextLevel;
         levelUp();
     }

     setCurrentExperience(finalExperience);
     setActivateChallenge(null);
     setCHallengesCompleted(challengesCompleted + 1);
    }

    return(
        <ChallengeContext.Provider value={{level, 
        currentExperience, 
        levelUp,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge

        }}>
          {children}
        </ChallengeContext.Provider>
    );
}