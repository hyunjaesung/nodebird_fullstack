import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

import propTypes from "prop-types";

import { createStore } from "redux";
import withRedux from "next-redux-wrapper";
// 일반적인 리액트와 다르게 next에서는 이걸써서 store 전달필요
// NodeBird props에 따로 전달할 수단이없네..
import { Provider } from "react-redux";
// 최상위 부모가 되서 리덕스 state를 제공
import reducer from "../reducers";

// _app.js를 페이지의 부모로 인식하고 다른 페이지의 함수들을 여기에넣어서 중복을 제거해줌
// 중복되는 부분만 줄여도 상당히 리렌더링이 줄어든다

const NodeBird = ({ Component, store }) => {
  // Component는 next에서 넣어주는 프롭스, pages에있는 파일이 리턴하는 함수 넣어줌
  return (
    <Provider store={store}>
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
    </Provider>
  );
  // <Component/> 임 주의
};

NodeBird.propTypes = {
  Component: propTypes.elementType,
  store: propTypes.object
};

export default withRedux((initState, options) => {
  const store = createStore(reducer, initState);
  // 여기다가 store 커스터 마이징
  return store;
})(NodeBird);
// 고위 컴포넌트라고 부르는데 기존 컴포넌트의 기능을 확장해준다
// NodeBird의 props로 store를 넣어줌
