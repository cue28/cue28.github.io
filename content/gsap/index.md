---
emoji: ๐น
title: GSAP(GreenSock Animation Platform)
date: '2022-02-20 13:14:00'
author: Siyoon Jeon
tags: gasp
categories: javascript
---

๐๐ป https://youtu.be/X7IBa7vZjmo ๊ฐ์๋ฅผ ๋ฐํ์ผ๋ก ์์ฑํ ๊ธ์๋๋ค.

ํ์ฌ ํํ์ด์ง๋ฅผ ๋งก๊ฒ ๋๋ฉด์ GSAP์ ๋ํด ๊ด์ฌ์ด ์๊ฒผ๋ค. ์ด์  ํ๋ก์ ํธ์๋ CSS๋ฅผ ํ์ฉํด์ ์ ๋๋ฉ์ด์์ ๊ตฌํํ๋ค. CSS๋ก ํด๊ฒฐํ  ์ ์์ผ๋ฉด ์ต๋ํ CSS๋ฅผ ์ฌ์ฉํ๋๊ฒ ์ข๋ค๋ ๊ธ์ ์ด๋์ ๊ฐ ๋ดค๋ค. ํ์ง๋ง CSS๋ ํ๊ณ๊ฐ ์์ด ๋ ๋ฉ์ง ์ ๋๋ฉ์ด์์ ๊ตฌํํ๊ณ  ์ถ๋ค๋ฉด ์ด ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ๋ํด ๊ณต๋ถํ๋ฉด ์ข์ ๊ฒ ๊ฐ๋ค.

# GSAP?

GSAP(GreenSock Animation Platform)๋, GreenSock์์ ๋ง๋  ์๋ฐ์คํฌ๋ฆฝํธ ์ ๋๋ฉ์ด์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ด๋ค. GSAP๋ ์ ์ด์ฟผ๋ฆฌ๋ณด๋ค 20๋ฐฐ ์ด์ ํผํฌ๋จผ์ค๊ฐ ์ข๊ณ  ์ฌ์ฉ๋ฒ๋ ๊ฐ๋จํ๋ค์ง๋ง, ์ฌ์ฉ๋ฒ์ ์ด๋ ต๊ณ  ํท๊ฐ๋ฆฌ๋ ๊ฒ ๊ฐ๋ค. ๊ทธ๋ผ์๋ GSAP๋ฅผ ์ฌ์ฉํ๋ ์ด์ ๋
- ๋๋ถ๋ถ ์์ ๋ฐ์ ์ฌ์ดํธ๊ฐ ์ฌ์ฉํ๋ฉฐ
- ๊ตฌ๊ธ๋ฆฌ ์ถ์ฒํ๋ ์๋ฐ์คํฌ๋ฆฝํธ ์ ๋๋ฉ์ด์
- 1000๋ง ์ด์์ด ์ฌ์ฉํ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
๋ก ์ปค๋ฎค๋ํฐ๊ฐ ํ์ฑ๋์ด์๊ธฐ ๋๋ฌธ์ด๋ค.

์ค์น๋ ์๋ github์์ CDN์ด๋ NPM์ผ๋ก ์ค์นํ  ์ ์๋ค.

[GSPA github](https://github.com/greensock/GSAP)

# gsap.to

๋์๊ณผ ์์ฑ์ด ํ์์ ์ผ๋ก ํ์ํ๋ค. target์ด x์ขํ 400๋งํผ 360๋ 3์ด๋์ ์ด๋ํ๋ค๋ ํํํ๊ณ  ์ถ๋ค๋ฉด ๋ค์๊ณผ ๊ฐ์ด ์์ฑํ๋ฉด ๋๋ค.

```js
gsap.to('.target', {
  x: 400,
  rotation: 360,
  duration: 3 //default๋ 0.5s
})
```

๋๋๋ง๋์๋ง์ ์ ๋๋งค์ด์์ด ์คํ๋์ด target์ด ์๋์ ์์ผ๋ฉด ์ ๋๋งค์ด์์ ๋ณด์ง ๋ชปํ๋ค.

```js
gsap.registerPlugin(ScrollTrigger);

gsap.to('.target', {
  scrollTrigger: '.target',
  x: 400,
  rotation: 360,
  duration: 3
})
```

scrollTrigger๋ฅผ ๊ฑธ์ด์ฃผ๋ฉด target์ด ํ๋ฉด์ ๋ณด์ผ ๋, ์ ๋๋งค์ด์์ด ์์๋๋ค. ํ์ง๋ง ๋ฐ๋๋ก ์คํฌ๋กค์ ์ฌ๋ ธ์ ๋ ์ ๋๋งค์ด์์ด ์ฌ๋์ํ๋ค๊ฑฐ๋ ๊ฑฐ๊พธ๋ก ๋์๊ฐ์ง๋ ์๋๋ค.

์ฌ์ฉ ๊ฐ๋ฅํ ํ๋กํผํฐ : https://greensock.com/docs/v3/GSAP/gsap.to()

# gsap.from(), fromTo(), set()

- from()์ ์ ๋ฐ๋๋ก ๋๋์์ค๋ ์ ๋๋งค์ด์์ด ์คํ
- fromTo()sms from ์์ฑ์ด ์์๊ฐ์ผ๋ก ์ธํ, to ์์ฑ์ด ์ข๋ฃ๊ฐ์ผ๋ก ์ธํ๋์ด ์ ๋๋งค์ด์ ํจ๊ณผ๊ฐ ๋ํ๋๋ค.
- set()์ ์ ๋๋ฉ์ด์ ํจ๊ณผ ์์ด ์ฆ์ ๋ณ๊ฒฝ๋๋ค.

# ScrollTrigger
## โช๏ธ Toggle actions

Toggle ์ก์์ ์ฌ์ฉํ๋ค๋ฉด ๊ฐ๋ฅํ๋ค. scrollTrigger์ ๊ฐ์ฒด๋ฅผ ๋ง๋ค์ด์ฃผ๊ณ , trigger์ toggleActions์ ๋ง๋ค์ด ์ค๋ค. 
- when it enters the viewport
- when it leaves
- when scrolled back into view
- when it leaves again (scrolled all the way back)
4๊ฐ์ง์ toggle points๋ง๋ค 8๊ฐ์ง์ ์ก์(:paly, pause, resume, reverse, restart, reset, complete, none)์ ์ง์ ํ  ์ ์๋ค.

```js
gsap.registerPlugin(ScrollTrigger);

gsap.to('.target', {
  scrollTrigger: {
    trigger: '.target',
    toggleActions: 'restart pause reverse pause', //toggle points
  },
  x: 400,
  rotation: 360,
  duration: 3
})
```

## โช๏ธ 'start' and 'end'
์ ๋๋งค์ด์์ด ์์ํ๊ณ  ๋๋๋ ์ง์ ์ ์ค์ ํ  ์ ์๋ค. ์ฒซ๋ฒ์งธ๋ ํด๋น ์ปดํฌ๋ํธ ๊ธฐ์ค, ๋๋ฒ์งธ๋ viewport ๊ธฐ์ค์ด๋ค. top, center, bottem, pixels, percentages(relative to top)๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.

ex) `start: '20px 80%'`

```js
gsap.registerPlugin(ScrollTrigger);

gsap.to('.target', {
  scrollTrigger: {
    trigger: '.target',
    start: 'top center', //target์ top๊ณผ viewport์ center๊ฐ ๋ง๋  ๋ ์์
    endTrigger: '.secondTarget',
    end: 'bottom 100px', //target์ bottom๊ณผ viewport์ 100px ์์น๊ฐ ๋ง๋  ๋ ๋
    marker: true,
    toggleActions: 'restart pause reverse pause',
  },
  x: 400,
  rotation: 360,
  duration: 3
})
```
 `marker: true`๋ฅผ ์ฌ์ฉํ๋ค๋ฉด, ์ง์  trigger์ ์์น๋ฅผ ๋ณผ ์ ์๋ค.
    
![marker](./marker.png)


target์ ๋ค๋ฅธ ์ปดํฌ๋ํธ๊ฐ ๋ค์ด๊ฐ ์ ์๊ณ , trigger์ endTrigger์ ๊ฐ๊ฐ ๋ค๋ฅธ ์ปดํฌ๋ํธ๋ก ์ค์ ํ  ์ ์๋ค.

## โช๏ธ Scrub animations

์คํฌ๋กค์ ๊ฑธ๋ ค ์ ๋๋งค์ด์์ด ์์ง์ธ๋ค๊ณ  ์๊ฐํ๋ฉด ํธํ๋ค. start์ง์ ์ ๋ค์ด์์๋ง์ ์คํฌ๋กค์ ๊ฐ๊ณ ๋ฆฌ์ฒ๋ผ ๊ฑธ๋ ค์ ์์ง์์ ๋ฐ๋ผ ์ ๋๋งค์ด์์ด ์์ง์ธ๋ค.

```js
gsap.registerPlugin(ScrollTrigger);

gsap.to('.target', {
  scrollTrigger: {
    trigger: '.target',
    start: 'top center',
    end: 'bottom 100px',
    scrub: true, //์ซ์๋ก ์ค๋ค๋ฉด ๊ทธ๋งํผ delay๊ฐ ๋๋ค. 1์ด๋ฉด default๋ณด๋ค ์กฐ๊ธ ๋ฆ๊ฒ ์ ์ฉ
    marker: true,
  },
  x: 400,
  rotation: 360,
  ease: 'none',
  duration: 3
})
```

์ด๋ฏธ์ง๋ฅผ ์์ฐจ์ ์ผ๋ก ์คํํ๊ธฐ ์ํด ํ์๋ผ์ธ์ ์ง์ ํด ์ฌ์ฉํ  ์๋ ์๋ค. ๊ฐ๊ฐ delay๋ฅผ ์ง์ ํ๋ ๋นํจ์จ์ ์ธ ์์์ ์ค์ฌ์ค๋ค.

```js
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.target',
    start: 'top center',
    end: 'bottom 100px',
    scrub: true,
    marker: true,
  },
})

tl.to('.target', {
  x: 400,
  rotation: 360,
  ease: 'none',
  duration: 3
})
.to('.target', {
  backgroundColor: 'red',
  duration: 1
})
```

## โช๏ธ Pinning

start๋๋ ์๊ฐ ํ๋ฉด์ด ๊ณ ์ ๋์ด ์ ๋๋งค์ด์์ด ์คํ๋๊ฒ๋ ์ค์ ํ  ์ ์๋ค. ๊ฐ๋ ์ด๋ค ์ฌ์ดํธ๋ฅผ ๋ณด๋ฉด ํ๋ฉด์ด ์ค๊ฐ์ ๋ฉ์ถฐ ์ฌ๋ผ์ด๋๊ฐ ์์ง์ด๊ณ , ์ฌ์ง์ด ์์ง์ด๋ ๊ฒ์ ๋ณผ ์ ์๋ค. ๊ทธ๋ฐ ๊ฒฝ์ฐ ์ฌ์ฉํ๋ค.

```js
gsap.registerPlugin(ScrollTrigger);

gsap.to('.target', {
  scrollTrigger: {
    trigger: '.target',
    start: 'top center',
    end: 'bottom 100px',
    scrub: true, //์ซ์๋ก ์ค๋ค๋ฉด ๊ทธ๋งํผ delay๊ฐ ๋๋ค. 1์ด๋ฉด default๋ณด๋ค ์กฐ๊ธ ๋ฆ๊ฒ ์ ์ฉ
    marker: true,
    pin: true, //์ปดํฌ๋ํธ๋ฅผ ์ง์ ํ๋ฉด ํด๋น ์ปดํฌ๋ํธ๊ฐ start~end๊น์ง ์์ง์ด์ง ์๋๋ค.
  },
  x: 400,
  rotation: 360,
  ease: 'none',
  duration: 3
})
```

ex.
```js
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: 'none', duration: 2});

const tl = gsap.timeline();
tl.from('.first', {xPercent: -100})
  .from('.second', {xPercent: 100})
  .from('.third', {yPercent: -100});

ScrollTigger.create({
  animation: tl,
  trigger: '#container',
  start: 'top top',
  end: '+=4000',
  scrub: true,
  pin: true,
  anticipatePin: 1
})
```

## โช๏ธ Snapping

์์์ ์ธ๊ธํ๋ ์ฌ๋ผ์ด๋๋ฅผ ๊ตฌํํ  ์ ์๋ ๋ฐฉ๋ฒ์ด๋ค. ์คํฌ๋กค์ ๋ฐ๋ผ ์์ง์ด๋ฉฐ, snap์ด ์์ ์ ์คํฌ๋กค์ด ์ค๊ฐ์ ๋ฉ์ถฐ์๋ค๋ฉฐ ์๋์ผ๋ก ๊ทธ๋งํผ ์์ง์ด๋ ๊ฒ์ด๋ค. ์ด์ง๋ง ์์ง์ฌ๋ ์๋์ผ๋ก ์ฌ๋ผ์ด๋๊ฐ ์์ง์ด๋ ๊ฒ์ ๋ณผ ์ ์๋ค. ๋ถ๋๋ฝ๊ฒ ์์ง์ด๋ ํจ๊ณผ๋ฅผ ๋ผ ์ ์๋ค.

```js
gsap.registerPlugin(ScrollTrigger);

let section = gsap.utils.toArray('.panel');

gsap.to(section, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.container',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length -1),
    end: () => "+=" + document.querySelector('.container').offsetWidth
  },
})
```

## โช๏ธ Callbacks and Custom Options

- onEnter: () => console.log('enter')
- onLeave: () => console.log('leave')
- onEnterBack: () => console.log('enterBack')
- onLeaveBack: () => console.log('leaveBack')
- onUpdata: (self) => console.log('update', self.progress.toFixed(3))
- onToggle: (self) => console.log('toggled', self.isActive))
- toggleClass: 'active'
- id: 'my-id'
- scroller: '#container'
- horizontal: true

ex.
```js
gsap.registerPlugin(ScrollTrigger);

scrollTrigger.create({
  trigger: '.target',
  start: 'top center',
  end: 'top 100px',
  onEnter: () => console.log('enter'),
  onLeave: () => console.log('leave'),
  marker: true,
})
```

---
์ฐธ๊ณ 
- https://youtu.be/X7IBa7vZjmo
- https://greensock.com/why-gsap/
- https://lpla.tistory.com/106

```toc
```