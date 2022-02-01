---
emoji: 
title: 디자인 패턴
date: '2022-02-01 20:42:00'
author: Siyoon Jeon
tags: designpattern
categories: javascript
---

## 디자인 패턴이란

소프트웨어를 설계할 때 특정 맥락에서 자주 발생하는 고질적인 문제들이 또 발생했을 때 재사용할 수 있는 훌륭한 해결책이다.

<aside>
📖 패턴 : 각기 다른 개발을 할 때도 서로간에 공통되는 설계 문제가 존재하며 이를 처리하는 해결책에도 공통점이 존재한다. 이러한 유사점을 패턴이라 한다.

</aside>

**장점**

- 코드 구조 고민에 대한 시간을 줄일 수 있다.
- 개발 프로세스의 사소한 문제들을 방지할 수 있다.
- 일반화된 문서 제공이 가능하다.
- 불필요한 반복을 줄쳐 코드 전체 크기를 줄일 수 있다.
- 개발자들과 의사소통이 빠르며, 새로운 패턴을 만들어 더 나은 코드를 만들어 볼 수도 있다.

### Module

하나의 블록으로 코드 단위를 분리하고 구성하는 필수 요소이다.

- The module pattern
    
    ```jsx
    (function() {
    	//비공개 변수, 함수 선언
    
    	return {
    			//공개 변수, 함수 선언
    	}
    )()
    ```
    
    독립적으로 유지하는데 사용되는 패턴
    
- Object literal notation
    
    ```jsx
    var obj = {
    	number : 0,
    	getNumber : function () {
    		console.log(this.number)
    	}
    }
    
    obj.getNumber() //0
    ```
    
    가장 일반적인 방법, 객체 외부에서 내부 number 변수에 접근이 가능하고, 브라우저에서 노출되는 자바스크립트 전역에서 객체 리터럴 방법을 사용하게 되면 보안에 문제가 있을 수 있다.
    
- AMD modules
- CommonJS modules
- ECMAScript Harmony modules

---

참고문서

- [https://gmlwjd9405.github.io/2018/07/06/design-pattern.html](https://gmlwjd9405.github.io/2018/07/06/design-pattern.html)
- [https://jinminkim-50502.medium.com/javascript-design-pattern-디자인-패턴-9a4283fb3909](https://jinminkim-50502.medium.com/javascript-design-pattern-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-9a4283fb3909)

```toc
```