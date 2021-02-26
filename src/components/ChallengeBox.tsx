import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/ChallengerBox.module.css";
import { CompletedChallenges } from "./CompletedChallenges";

export function ChallengeBox() {
    const { activeChallenge,resetChallenge, CompletChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);
    
    function handleChallengesSucceeded(){
        CompletChallenge();
        resetCountdown();
    }

    function handleChallengesFailed(){
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.ChallengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.ChallengeActive}>

                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>

                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>

                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.ChallengeFailedButton}
                            onClick={handleChallengesFailed}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.ChallengeSucceededButton}
                            onClick = { handleChallengesSucceeded }
                        >
                            Completei
                        </button>

                    </footer>

                </div>
            ) : (
                    <div className={styles.ChallengeNotActive}>
                        <strong>Finalize um ciclo para recber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                    Avence de level completando desafios.
                </p>
                    </div>
                )}
        </div>
    )
}