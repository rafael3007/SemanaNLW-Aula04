import { Profiler } from "react"
import styles from "../styles/components/Profile.module.css"

export function Profile() {
    return(
        <div className ={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1346990339299663872/e88tNqly_400x400.jpg" alt="Rafael Brito"/>
           
            <div>
                <strong>Rafael Brito</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>

                    Level 1
                </p>

            </div>
        
        </div>
    );
}