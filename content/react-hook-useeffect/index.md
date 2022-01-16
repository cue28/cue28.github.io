---
emoji: 🔄
title: React의 동기화, useEffect
date: '2022-01-12 00:46:00'
author: Siyoon Jeon
tags: useeffect
categories: react
---

useEffect는 컴포넌트가 처음 나타났을 때, 사라질 때, 업데이트 될 때 특정 작업을 처리할 수 있는 Hook이다. 함수 컴포넌트 내에서 side effect를 수행할 수 있게 해주며, class에서 사용하는 componentDidMount(마운트 됐을 때), componentDidUpdate(업데이트 됐을 때), componentWillUnmount(언마운트 될 때)와 같은 목적으로 하나라 통합한 API이다.


## 마운트, 언마운트
```js
import React, { useState, useEffect } from 'react'; 

function Example() { 
  const [count, setCount] = useState(0); 
  // componentDidMount, componentDidUpdate와 비슷합니다 
  useEffect(() => { 
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다 
    document.title = `You clicked ${count} times`; 
    return () => {
      console.log('컴포넌트가 화면에서 사라짐')
    };
  }, []);

  return ( 
    <div> 
      <p>You clicked {count} times</p> 
      <button onClick={() => setCount(count + 1)}> Click me </button> 
    </div> 
  );
};
```
useEffect의 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열(deps)를 입력한다. 만약 컴포넌트가 처음 나타날때에만 useEffect에 등록된 함수가 실행되게 하고 싶다면, 빈 배열을 사용한다.

cleanup함수는 useEffect에서 반환하는 함수로, useEffect에 대한 뒷정리를 해준다. deps가 비어있는 경우 컴포넌트가 사라질 때 cleanup함수가 호출된다.

마운트 시
- `props`로 받은 값을 컴포넌트의 로컬 상태로 설정
- 외부 API 요청(REST API 등)
- 라이브러리 사용
- setInterval을 통한 반복 작업 또는 setTimeout을 통한 작업 예약

언마운트 시
- setInterval, setTimeout을 사용하여 등록한 작업들 clear하기
- 라이브러리 인스턴스 제거


## deps 설정
deps에 특정 값을 넣는다면 컴포넌트가 처음 마운트될 때와 지정한 값이 바뀔 때 호출된다. 언마운트시에도, 값이 바뀌기 직전에도 호출된다.

useEffect 안에서 사용하는 상태나, props가 있다면, deps에 넣어주어야 한다. 만약 이 규칙을 어긴다면, useEffect에 등록한 함수가 실행 될 때 최신 props나 상태를 가르키지 않게 된다.

deps 파라미터를 생략한다면 컴포넌트가 리렌더링 될 때마다 호출된다.

---

참고.
- 리액트 공식문서 
- https://react.vlpt.us/basic/16-useEffect.html
- [useEffect 완벽 가이드 번역](https://rinae.dev/posts/a-complete-guide-to-useeffect-ko)


```toc
```