---
emoji: 📞
title: 렌더링 최적화, useMemo & useCallback
date: '2022-01-15 21:14:00'
author: Siyoon Jeon
tags: usememo and usecallback
categories: react
---

## useMemo

메모리제이션된 **값**을 반환하는 hook이다.

React의 컴포넌트는 자신의 state가 변경되거나, 부모로부터 받는 props가 변경되었을 때마다 리렌더링 된다. 만약 한 컴포넌트에 여러 props가 있다면, props 하나만 변경되었음에도 모든 props가 리렌더링 된다. 이를 방지하여 변경된 값만 리렌더링하게끔 만드는 useMemo Hook을 사용할 수 있다.

```js
import React from "react";

const whatsDay = ({ today, birthday }) => {
  const today = getTodayYearDate();
  const birthday = getBirthday();

  return (
    <div>
      오늘은 {today}이고, 생일은 {birthday}입니다.
    </div>
  );
};
```

이해를 위해 간략한 코드를 짜봤다. 위의 코드처럼 작성한다면 today 또는 birthday 둘 중 하나만 바껴도 getTodayYearDate와 getBirthday 함수를 실행하게 된다. useMemo를 사용할 경우는 다음과 같다.

```js
import React, { useMemo } from "react";

const whatsDay = ({ today, birthday }) => {
  const todayMemo = useMemo(() => getTodayYearDate(), [today]);
  const birthday = useMemo(() => getBirthday(), [birthday]);

  return (
    <div>
      오늘은 {today}이고, 생일은 {birthday}입니다.
    </div>
  );
};
```
useMemo 의존성 배열에 넘겨준 값이 변경했을 경우에만 메모된 값을 다시 계산하며 today값이 변경되었을 때는 getTodayYearDate 함수만, birthday가 변경되었을 때는 getBirthday 함수만 실행되게 된다. 값이 변경되지 않으면 이전에 메모리제이션 된 값을 사용하게 된다. 함수가 더욱 복잡해질 경우 불필요한 계산을 막을 수 있다.

## useCallback

메모리제이션된 **함수**을 반환하는 hook이다.

컴포넌트가 리렌더링될 때, 컴포넌트 내부의 변수가 다시 선언되고 함수가 다시 실행되곤 한다. useMemo와 비슷하게 첫 마운트 때만 선언하게 하고 컴포넌트가 리렌더링될 때 재선언하는 것을 useCallback hook을 사용하여 방지할 수 있다. useCallback을 사용하면 눈에 띄는 최적화는 없지만 React DevTools 을 사용한다면 리렌더링 되는 컴포넌트를 확인할 수 있다.  ([참고](https://react.vlpt.us/basic/18-useCallback.html#:~:text=%EC%9A%B0%EC%84%A0%2C%20%EA%B5%AC%EA%B8%80%EC%97%90-,React%20DevTools,-%EB%A5%BC%20%EA%B2%80%EC%83%89%ED%95%B4%EC%84%9C%20%ED%81%AC%EB%A1%AC))

```js
import React, { useState } from "react";

const App = () => {
  const [today, setToday] = useState('0000.00.00');

  const handleClickChangeToday = (e) => {
    setToday(e.target.value);
  };

  return (...생략);
};
```
위의 코드에서는 App 컴포넌트가 리렌더링 될 때마다 handleClickChangeToday 함수가 선언된다. 
```js
import React, { useState, useCallback } from "react";

const App = () => {
  const [today, setToday] = useState('0000.00.00');

  const handleClickChangeToday = useCallback((e) => {
    setToday(e.target.value);
  }, []);

  return (...생략);
};
```
해당 코드는 첫 마운드 당시에만 선언되며, 마찬가지로 deps 배열에 변경되면 실행할 변수를 입력해주면 된다. 주의할 점은 함수 내에서 사용하는 상태, props 가 있다면 **꼭 deps 배열**안에 포함시켜야 한다. 포함시키지 않는다면 가장 최신의 값을 참조한다는 보장이 없다. 

## React.memo리렌더링 방지

컴포넌트의 props가 바뀌지 않았다면 리렌더링을 방지해 성능 최적화를 할 수 있는 방법이 있다. React.memo를 사용한다면 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정해 줄 수 있다.

사용 방법은 아래처럼 그냥 함수 전체를 감싸주면된다. 
```js
export default React.memo(whatsDay);
```
이는 불필요한 props 비교만하는 것이기에 실제로 렌더링을 방지 할 수 있는 상황이 있는 경우에만 사용하며, 두번째 파라미터에 `propsAreEqual`이라는 함수를 사용하면 특정값을 비교하는 것이 가능하다. 하지만 의도치 않은 버그들이 발생하기 쉬움으로 지양하는 것이 좋다.

리액트 개발을 할 때, useCallback, useMemo, React.memo는 실제 컴포넌트의 성능의 개선할 수 있을 때만 사용해야한다. 사용한다고 해서 리렌더링을 막을 수 있는게 아니라면 굳이 사용할 필요는 없다.

## 최적화 vs 발적화

- 실행되는 모든 코드는 각각 한 줄마다 비용이 든다.
- 실제로 퍼포먼스 개선이 없는 부분에서 `useCallback` 호출, 의존성 배열(`[]`) 을 선언해 주면서 리소스를 더 잡아먹음. →  초과비용, 불필요한 비교
- 게다가 함수 자체를 메모이제이션 해두기 위해 추가로 메모리를 잡아먹게 된다.
- 결국 코드 최적화 한다고 들인 공에 비해 얻을 수 있는 이득은 미미
- 이런 고민 할 시간에 발적화를 방지하면서 제품 자체를 더 좋게 만드는게 훨씬 이득일 수 있다.

## 결론

최적화는 진짜 필요할 때까지 기다리는 것이다.
리액트는 충분히 빠르다. 성급한 최적화는 독이 될 수 있으므로, 
진짜 필요할 때까지 피하며 책임감있게 최적화하자 !

- 어떻게?
    - 퍼포먼스 측정
    - 정확한 측정 없이 “이 코드가 퍼포먼스에 문제를 일으킬 수 있다.” 고 여긴다면 성급한 최적화를 할 수도 있다.
    - 특정 컴포넌트가 퍼포먼스 문제를 일으킨다고 판단되면 **명확한 검증을 통해** 판단이 맞는지 확인한 후 최적화 과정을 거치도록 하자 !

이 글을 모두 이해한다면 [이 블로그](https://rinae.dev/posts/review-when-to-usememo-and-usecallback)를 본다면 좋을 것 같다.

---
참고
- 리액트 공식문서
- https://react.vlpt.us/basic/17-useMemo.html
- https://leehwarang.github.io/2020/05/02/useMemo&useCallback.html
- https://kentcdodds.com/blog/usememo-and-usecallback
- https://ui.toast.com/weekly-pick/ko_20190731
- https://medium.com/myrealtrip-product/fe-website-perf-part2-e0c7462ef822


```toc
```