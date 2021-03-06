---
emoji: π 
title: κ°λ° νκ²½ μΈν
date: '2021-12-23 23:34:00'
author: Siyoon Jeon
tags: blog
categories: blog
---

κ°λ° κ³΅λΆλ₯Ό νλ©΄μ λΈνΈλΆμ λ°κΏ μ΄ 3λ² νκ²½ μΈνμ ν κ²½νμ΄ μλ€. κ·Έλλ§λ€ μΈνμ λμμ€(?) λΈλ‘κ·Έλ₯Ό μ μ°ΎμμΌνλ€λ μκ°μ νλ€. μ΄μ μλ λ§μ λΈλ‘κ·Έλ₯Ό μ°Ύμλ³΄λ©΄μ λλλλ‘ νμ§λ§, μ΄λ²μλ μλν λ°©λ²μ λ©λͺ¨νλ©° μΈννλ€. μ»΄ν¨ν°λ§λ€ μ¬μμ΄ λ€λ₯΄κ³  M1μΉ©μ΄ λμ€λ©΄μ μΈν λ°©λ²μ΄ μ΄λ²μ λΈλ‘κΉν  μΈν λ°©λ²μ Mac Pro Interμ μ μ©ν λ°©λ²μ΄λ€.

μλ λ¬Έμμμ λ§μ λμμ λ°μλ€. λλΆλΆ Mac μΈνμ λν΄ μ λ¦¬κ° μ λμ΄μλ€.

π [macOS μλ΄μ](https://subicura.com/mac/)
  - [κ°λ° νκ²½ μ€μ ](https://subicura.com/mac/dev/)


### κ°λ° νκ²½ μΈν (Xcode μ€μΉν μν)

1. [Homebrew](https://brew.sh/index_ko) μ€μΉ
2. `brew install node`
3. `npm install -g node@version --force`   
4. `npm install -g npm@version`
5. `npm install yarn`
6. `vim ~/.zshrc`

```bash
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

7. esc β :wq β enter
8. `source ~/.zshrc`

### VScode

```bash
$ brew install cask
$ brew install --cask visual-studio-code
```

### Git μ€μ 

```bash
$ brew install git git-lfs

$ git lfs install
$ git config --global user.name "Your Name"
$ git config --global user.email "you@your-domain.com"
$ git config --global core.precomposeunicode true
$ git config --global core.quotepath false
```

ref. [https://herojoon-dev.tistory.com/50](https://herojoon-dev.tistory.com/50)

### watchman μ€μΉ 
- vscode νΈμ§κΈ° λ³κ²½λ λ΄μ© μλ νμ§νλ κΈ°λ₯ (Native μ νμ)

```bash
$ brew install watchman
$ watchman --version
```

### React Native μ€μ 

[κ³΅μλ¬Έμ](https://reactnative.dev/docs/environment-setup) μ°Έκ³ 

### Android studio μ€μ 

1. Java11 μ€μΉ ([https://soongjamm.tistory.com/104](https://soongjamm.tistory.com/104))

```bash
$ brew tap AdoptOpenJDK/openjdk
$ brew install adoptopenjdk11 --cask
```

- μλ° λ²μ  λ° κ²½λ‘ νμΈ

```bash
$ /usr/libexec/java_home -V
Matching Java Virtual Machines (3):
    14.0.1, x86_64:    "OpenJDK 14.0.1"    /Library/Java/JavaVirtualMachines/openjdk-14.0.1.jdk/Contents/Home
    11.0.9.1, x86_64:    "AdoptOpenJDK 11"    /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home
    1.8.0_221, x86_64:    "Java SE 8"    /Library/Java/JavaVirtualMachines/jdk1.8.0_221.jdk/Contents/Home

/Library/Java/JavaVirtualMachines/openjdk-14.0.1.jdk/Contents/Home
```

- ./zshrc νμΌ λ§μ§λ§ μ€μ μλ μ½λ μ½μ ν μ μ₯

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

1. [Android studio](https://developer.android.com/studio?hl=es-419) λ€μ΄λ‘λ
- [Android studio μ€μ ](https://dev-yakuza.posstree.com/ko/react-native/install-on-mac/#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4-%EC%84%A4%EC%B9%98)
- νκ²½ λ³μ μ€μ  (`.zshrc` νμΌ μλ μ½λ μ½μ ν μ μ₯)

```bash
# export ANDROID_SDK_ROOT=/Users/siyoonjeon/Library/Android/sdk
export ANDROID_SDK_ROOT=<your HOME>/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/tools
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

μ£Όμλ₯Ό λͺ¨λ₯Ό κ²½μ° μλλ‘μ΄λ μ€νλμ€ setting > android `SDK` λ΄μμ νμΈ κ°λ₯

1. [Android File Transfer λ€μ΄λ‘λ](https://www.android.com/filetransfer/)

```toc
```