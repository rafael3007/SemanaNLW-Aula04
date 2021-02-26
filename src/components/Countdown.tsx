import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css";
import { CountdownContext } from "../contexts/CountdownContext";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split('');



    return (
        <div>
            <div className={styles.CountdownContainer}>

                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>

                <span>:</span>

                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>

            </div>

            { hasFinished ? (

                <button
                    disabled
                    className={styles.CountdownButton}
                >
                    Ciclo encerrado
                </button>

            ) : (
                    <>
                        { isActive ? (

                            <button
                                type="button"
                                className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo

                            </button>

                        ) : (
                                <button
                                    type="button"
                                    className={styles.CountdownButton}
                                    onClick={startCountdown}
                                >

                                    Iniciar um ciclo

                                </button>

                            )}
                    </>
                )}
        </div>
    );
}