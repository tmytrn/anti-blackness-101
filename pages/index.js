import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { data } from "../materials";
import Materials from "../components/Materials";

export const getStaticProps = async () => {
  return {
    props: {
      materials: data,
    },
  };
};

export default function Home({ materials }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anti Blackness 101</title>
        <meta name="description" content="Anti Blackness 101" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Anti Blackness 101</h1>
        <Materials materials={materials} />
        <div className={styles.reflection}>
          <h3 className={styles.heading_h3}>My Reflection</h3>
          <p>
            This class has completely reshaped how I think about racism and
            colorism in our society. Race as we know it today has been invented
            to oppress people with darker skin, and to enable prejudice. Our
            cities have been built to segregate us and keep us divided. Many
            laws were created to target racial minorities and to empower white
            majorities.
          </p>
          <p>
            We can&apos;t reach a post-racial society by ignoring the color of
            people&apos;s skin. We have to talk about it, acknowledge the
            history, and find ways to undo the structures built on racial
            prejudice and discrmination.
          </p>
          <p>
            I plan to be more active in unlearning my anti-blackness by focusing
            on my own learning, and to seek out ways to make learning resources
            more available/accessible.
          </p>
          .
        </div>
      </main>

      <footer className={styles.footer}>
        This site was made as a class project for{" "}
        <a href="https://www.peoplematter.one/">People Matter</a>
      </footer>
    </div>
  );
}
