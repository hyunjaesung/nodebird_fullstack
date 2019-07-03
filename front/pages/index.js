import Link from "next/link";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <>
      {/* Head에 antd css넣어줘야 디자인적용된다*/}
      {/* import "antd/dist/antd.css"; 이렇게 넣는건 웹팩에서 로더 별도 설정필요 */}
      <Head>
        <title>SteveBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.8/antd.css"
        />
      </Head>
      <AppLayout>
        <Link href="/about">about</Link>
        <div>Hello Next</div>
      </AppLayout>
    </>
  );
};

export default Home;
