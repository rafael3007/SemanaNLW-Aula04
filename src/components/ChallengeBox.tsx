import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ChallengerBox.module.css";

export function ChallengeBox() {
    const contextData = useContext(ChallengesContext);
    
    console.log(contextData);

    const hasActiveChallenge = true;

    return (
        <div className={styles.ChallengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.ChallengeActive}>

                    <header>Ganhe 400 xp</header>

                    <main>

                        <img src="icons/body.svg" alt="" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>

                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.ChallengeFailedButton}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.ChallengeSucceededButton}
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