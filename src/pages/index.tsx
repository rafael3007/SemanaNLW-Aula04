import Head from "next/head";
import { GetServerSideProps } from "next";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currententExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {



  return (
    <ChallengesProvider 
    level= {props.level}
    currententExperience = {props.currententExperience}
    challengesCompleted = {props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>

          <title>Inicio | move.it </title>

        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>

            <div>

              <Profile />
              <CompletedChallenges />
              <Countdown />

            </div>

            <div>

              <ChallengeBox />

            </div>

          </section>
        </CountdownProvider>

      </div>

    </ChallengesProvider>


  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currententExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currententExperience: Number(currententExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}

