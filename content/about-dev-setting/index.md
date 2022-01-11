---
emoji: 🛠
title: 개발 환경 세팅
date: '2021-12-23 23:34:00'
author: Siyoon Jeon
tags: blog
categories: blog
---

개발 공부를 하면서 노트북을 바꿔 총 3번 환경 세팅을 한 경험이 있다. 그때마다 세팅을 도와줄(?) 블로그를 잘 찾아야한다는 생각을 했다. 이전에는 많은 블로그를 찾아보면서 되는대로 했지만, 이번에는 시도한 방법을 메모하며 세팅했다. 컴퓨터마다 사양이 다르고 M1칩이 나오면서 세팅 방법이 이번에 블로깅할 세팅 방법은 Mac Pro Inter에 적용한 방법이다.

아래 문서에서 많은 도움을 받았다. 대부분 Mac 세팅에 대해 정리가 잘 되어있다.

📖 [macOS 안내서](https://subicura.com/mac/)
  - [개발 환경 설정](https://subicura.com/mac/dev/)


### 개발 환경 세팅 (Xcode 설치한 상태)

1. [Homebrew](https://brew.sh/index_ko) 설치
2. `brew install node`
3. `npm install -g node@version --force`   
4. `npm install -g npm@version`
5. `npm install yarn`
6. `vim ~/.zshrc`

```bash
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

7. esc → :wq → enter
8. `source ~/.zshrc`

### VScode

```bash
$ brew install cask
$ brew install --cask visual-studio-code
```

### Git 설정

```bash
$ brew install git git-lfs

$ git lfs install
$ git config --global user.name "Your Name"
$ git config --global user.email "you@your-domain.com"
$ git config --global core.precomposeunicode true
$ git config --global core.quotepath false
```

ref. [https://herojoon-dev.tistory.com/50](https://herojoon-dev.tistory.com/50)

### watchman 설치 
- vscode 편집기 변경된 내용 자동 탐지하는 기능 (Native 시 필요)

```bash
$ brew install watchman
$ watchman --version
```

### React Native 설정

[공식문서](https://reactnative.dev/docs/environment-setup) 참고

### Android studio 설정

1. Java11 설치 ([https://soongjamm.tistory.com/104](https://soongjamm.tistory.com/104))

```bash
$ brew tap AdoptOpenJDK/openjdk
$ brew install adoptopenjdk11 --cask
```

- 자바 버전 및 경로 확인

```bash
$ /usr/libexec/java_home -V
Matching Java Virtual Machines (3):
    14.0.1, x86_64:    "OpenJDK 14.0.1"    /Library/Java/JavaVirtualMachines/openjdk-14.0.1.jdk/Contents/Home
    11.0.9.1, x86_64:    "AdoptOpenJDK 11"    /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home
    1.8.0_221, x86_64:    "Java SE 8"    /Library/Java/JavaVirtualMachines/jdk1.8.0_221.jdk/Contents/Home

/Library/Java/JavaVirtualMachines/openjdk-14.0.1.jdk/Contents/Home
```

- ./zshrc 파일 마지막 줄에 아래 코드 삽입 후 저장

```bash
export JAVA_8_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_221.jdk/Contents/Home"
export JAVA_11_HOME="/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home"

alias java8='export JAVA_HOME=$JAVA_8_HOME'
alias java11='export JAVA_HOME=$JAVA_11_HOME'
```

```bash
$ source .zshrc
$ java --version
openjdk version "11.0.9.1" 2020-11-04
OpenJDK Runtime Environment AdoptOpenJDK (build 11.0.9.1+1)
OpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.9.1+1, mixed mode)
```

1. [Android studio](https://developer.android.com/studio?hl=es-419) 다운로드
- [Android studio 설정](https://dev-yakuza.posstree.com/ko/react-native/install-on-mac/#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%EC%84%A4%EC%B9%98)
- 환경 변수 설정 (`.zshrc` 파일 아래 코드 삽입 후 저장)

```bash
# export ANDROID_SDK_ROOT=/Users/siyoonjeon/Library/Android/sdk
export ANDROID_SDK_ROOT=<your HOME>/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/tools
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

주소를 모를 경우 안드로이드 스튜디오 setting > android `SDK` 내에서 확인 가능

1. [Android File Transfer 다운로드](https://www.android.com/filetransfer/)

```toc
```