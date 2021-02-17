import { Main } from '$components/Main/Main';
import { GlobalStyles, NoScroll } from '$styles';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Báknið</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <NoScroll />
      <Main>
        <h1>báknið</h1>
      </Main>
    </>
  );
}
