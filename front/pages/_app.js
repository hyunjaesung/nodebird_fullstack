import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import propTypes from "prop-types";

// _app.js를 페이지의 부모로 인식하고 다른 페이지의 함수들을 여기에넣어서 중복을 제거해줌
// 중복되는 부분만 줄여도 상당히 리렌더링이 줄어든다

const NodeBird = ({ Component }) => {
  // Component는 next에서 넣어주는 프롭스, pages에있는 파일이 리턴하는 함수 넣어줌
  return (
    <>
      <Head>
        <title>SteveBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.8/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
  // <Component/> 임 주의
};

NodeBird.propTypes = {
  Component: propTypes.elementType
};

export default NodeBird;
