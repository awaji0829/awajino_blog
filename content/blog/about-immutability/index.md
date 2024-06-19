---
title: 불변성을 이해해보자?
date: "2022-04-06T22:12:03.284Z"
description: "불변성"
---

이해를 하며 가졌던 의문들을 나열하며 머릿속에 들어온 개념들을 내 식으로 정리해본다. <br/>
불변성을 모르던 이에게 쉽게 이해시킬 수 있는 수준이 이 글의 목표다.

> ### 불변성 ?
>
> 불변함을 의미하는 단어이다. 프로그래밍에서 immutability는 데이터의 원본이 훼손되는 것을 막는 것을 의미한다.

구글에 검색하면 나오는 설명이다.
그래서 원본을 왜 훼손하면 안되는건데?

일단 주로 실무적으로 사용하고 있는 리액트와 같은 프레임워크, 함수형 프로그래밍이나 디자인 패턴등의 아주 중요한 기초라고 한다.

리액트를 사용할때 화면이 바뀌는 시점(렌더)이 언제인가? <br/>바로 상태 변경이 이루어 질때다.
그래서 이 상태변경을 어떻게 알아차리는건데? <br/>
바로 불변성 !! 으로 알아차리는 것이다.

멋모르고 리액트를 무자비하게 배우던 시절 몇가지 기억에 남지만 그 당시 이해못하고 잘 지키던 규칙이 있다.

##### 반드시 state를 변경할때 setState를 사용하세요! 직접 state를 변경하면 안됩니다!

     - good) setState('gimbab')
     - nono) this.state = 'gimbab' or state = 'gimbab'

네네! 어렵지 않았고 무조건 상태를 바꾸는 방법은 저 setState를 사용하여 큰 문제 없이 불변성과 함께하였다.

자, 이제 왜 저 아래의 예시가 안되는지 이해할 차례이다.

내가 이제껏 신나게 사용했던 setState는 새로운 상태를 인자로 넣으면 무엇을 하고 있는걸까?
기존 상태를 변경하는것이 아닌 유지하되, 새로운 객체! 를 만들고 있는것이다.

그리고는 그 새로운 객체를 재할당 하고 있는것이다.
이게 불변성과 어떤관련이..? <br/>
하고 잠깐 의문이 드는순간
기존 상태를 변경하지 않는다는 점에 불변성이 유지된다고 !! 이해가 되었다.

리액트는 렌더하는 기준이 state가 변할때라고 하였다.
이 state 변경을 감지하려먼 우선 이전 상태와 새로운 상태 두가지가 필요하다.

이전상태를 직접 변경 한다면 ( state = 'gimbab' ) 이전상태와 새로운 상태의 변경점을 리액트는 알아차리지 못한다.

하지만 setState를 사용한다면 새로 들어온 상태로 새로운 객체를 생성하기 때문에 이전 상태와 비교해
달라진 점만 변경할 수 있다. 훨씬 효율적으로 상태를 알아차리기 위한 리액트의 원리라고 한다.

가볍게 리액트와 불변성의 관계를 훑어 보았다.

조금 더 자세히 들어가보자면..

> ### 기본형 데이터 (Primitive type)

우선 javascript에서 불변성이 항상 유지되는 데이터타입이 있다.

기본형 데이터다(number, string, boolean, null, undefined, Symbol)

어떻게 유지가 돼?

```js
let 우리집 = "아파트"
우리집 = "빌라"
```

우리집에 우선 아파트를 할당을 했다. <br/>그리고 다시 빌라로 재할당을 하였다. <br/>
우선 아파트라고 할당을 한 순간, 땅(메모리 공간) 이 생기고 그리고 아파트가 들어섰다. <br/><br/>그리고 다시 빌라로 재할당을 했을때,
빌라라는 땅(메모리공간)이 생긴다 그 위에 빌라가 들어섰다. <br/>
기존 땅에 아파트를 부시고 빌라를 재건축 하는것이 아니라..

이전 집이었던 아파트는 그대로 있겠지.. 이것이 바로 불변성이다.

```js
let 우리집 = "아파트"
우리집 = "빌라"

let 친구집 = "아파트"
```

친구집에 아파트를 할당했다. 아파트는 이미 메모리에 있기 때문에 그 값을 재활용한다.

```js
let 우리집 = "아파트"
우리집 = "빌라"

let 친구집 = "아파트"
친구집 = "빌라"
```

이렇게 다시 친구집에 '빌라'를 재할당하였다면..? <br/>우리집에서 '빌라'로 이미 만들어진 값이 있기 때문에 <br/>
우리집에 할당되었었던 '빌라'의 주소값이 친구집으로도 재할당 된다. 동거..인가?

> ### 참조형 데이터 (Reference type)

-Object (Array, Function , Date, ReqExp, Map, WeakMap, Set, WeakSet)

데이터 타입에 상관없이 연산이나 할당시 모두 `복제`된다. <br/>

다만 기본형은 무엇이 복제되는가? 바로 그 `값의 주소값`이다. <br/> <br/>
그렇다면 참조형은 그 `주소값들이 담긴 공간의 주소값`을 복제한다. <br/>
이 모양새가 마치 참조의 성격이 강해 참조형 데이터라고 명명한것이 아닌가 싶다. <br/>

참조형 데이터와 기본형 데이터의 가장 큰 차이점인 `가변성`에 대해 말해보자면 <br/>

참조형 데이터의 `프로퍼티값` 을 변경했을때 가장 큰 차이점을 보인다. <br/>

```js
//기본형 데이터
let 우리집 = "아파트"
let 친구집 = 우리집

let obj1 = { 우리집: "아파트", id: 232323 }
let obj2 = obj1

친구집 = "전원주택"
obj2.우리집 = "오피스텔"

// 친구집 !== 우리집
// obj1 === obj2
```

우리집에 '아파트'를 할당했고 <br/>
친구집에 우리집의 값(= 아파트가 들어선 땅의 주소값)이 할당 되었다. <br/>

친구집이 다시 '전원주택'으로 재할당 되었다. <br/>
우리집은 여전히 '아파트'가 할당되어있다. <br/>
그렇기 때문에 친구집과 우리집은 같지 않다. <br/>

참조형 데이터를 보자<br/>

obj1에 { 우리집: "아파트", id: 232323 } 객체가 들어섰다.<br/>
여기서 유의해야 할 점은 (기본형데이터와 다른점)<br/> obj1에 저 객체가 담겨져 있는 공간이 하나 더 있다는 것이다. <br/>
그러니까 obj1에 할당하는 값은 저 `객체가 담겨져 있는 주소값` 인 것이다. <br/>

그러니까 <br/>
obj2 에는 obj1의 값(저 `객체가 담겨져 있는 주소값`) 이 할당되었고,<br/><br/>

그 후에 <br/>
`obj2.우리집` 이렇게 객체의 프로퍼티값에 접근하여 변경을 하였다.<br/>
<br/>
이러한 변경은 `객체가 담겨져 있는 주소값`에서 이루어 지고 있는 것이 아닌<br/>
저 객체 안에서 일어나는 것이다. 그렇기 때문에 <br/>

저렇게 프로퍼티에 접근하여 값을 변경하더라도 <br/>
obj1 와 obj2 가 가리키는 주소값은 여전히 동일하기 때문에 같다!

```js
//기본형 데이터
let 우리집 = "아파트"
let 친구집 = 우리집

let obj1 = { 우리집: "아파트", id: 232323 }
let obj2 = obj1

친구집 = "전원주택"
obj2.우리집 = "오피스텔"

console.log(obj1) //  { 우리집: "오피스텔", id: 232323 }
console.log(obj2) // { 우리집: "오피스텔", id: 232323 }
```

변수 a 의 값을 복사를 하여 변수b 에 할당하고
그 b에 변수 다른 값을 재할당한다.

그랬을때 기본형 데이터는 b의 값이 변경되더라도 a의 값이 유지된다.

참조형데이터는 a의 값(객체)를 b에 할당하고 b에서 프로퍼티값에 접근하여 값을 변경하면
a의 값도 변한다. 변한다기 보다는 결국 같은 객체를 바라보고 있기 때문에 같은거다.

다른객체를 바라본다면 같지 않다.

```js
//기본형 데이터

let obj1 = { 우리집: "아파트", id: 232323 }
let obj2 = { 우리집: "아파트", id: 232323 }

obj2.우리집 = "오피스텔"

console.log(obj1) //  { 우리집: "오피스텔", id: 232323 }
console.log(obj2) // { 우리집: "오피스텔", id: 232323 }
```

눈에 보이는게 똑같다고 해서 똑같은게 아니다.
주소를 항상 생각해야 한다.

```js
let obj1 = { 우리집: "아파트", id: 232323 }
let obj2 = { 우리집: "아파트", id: 232323 }

//obj1 !== obj2
```

왜 같지 않을까? <br/>우리는 아까 obj1에 할당한 객체의 주소값 그대로 obj2에 할당을 했지만 <br/> <br/>

이번에는 obj2에 obj1와 안의 프로퍼티 값이 같은 새로운 객체를 `생성`한 것이다. <br/>
생성한다는 것은 저 obj2에 할당할 공간이 새로 만들어졌고 그 공간 안에 저 객체가 들어선 것이다. <br/>
그리고 그 공간은 새로 만들어졌기 때문에 <br/>obj1에 할당되어 있는 저 객체의 주소값과 obj2에 할당되어 있는 주소값이 다른 것이다. <br/>

물론 저 객체안의 프로퍼티 값은 같은 메모리 공간을 쓰고 있지만 말이다. (기본형 데이터) <br/>

### 마무리

이런 개념들을 자바스크립트가 익숙하지 않았을때 훑어 보았던 적이 있다. <br/>
당최 텍스트를 열심히 읽고 있지만 머리속에 그림이 잘 그려지지 않았다. <br/> <br/>
눈 앞에 코드를 쳤을때 돌아가는 모양새를 <br/> 입체적으로 생각하지 못하고 단편적으로 생각했기 때문이다. <br/>
조금 더 자바스크립트가 돌아가는 자세한 개념들을 익히기 시작하자 이러한 것들이 이해가 되기 시작했다.

당장 이해가 되지 않는다 하여 어렵네~ 하고 피하는 것 보단 끈질기게 시간을 두고 본다면 <br/>
결국에 이해될 일이었다. <br/><br/> 그러니 뭐든지 겁먹고 피하지 말자. 결국엔 마주해야 될텐데

### ref

코어 자바스크립트 - 정재남

<!--
[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

![Chinese Salty Egg](./salty_egg.jpg)

You can also write code blocks here!

| Number | Title                                    | Year |
| :----- | :--------------------------------------- | ---: |
| 1      | Harry Potter and the Philosopher’s Stone | 2001 |
| 2      | Harry Potter and the Chamber of Secrets  | 2002 |
| 3      | Harry Potter and the Prisoner of Azkaban | 2004 |

[View raw (TEST.md)](https://raw.github.com/adamschwartz/github-markdown-kitchen-sink/master/README.md)

This is a paragraph.

    This is a paragraph.

# Header 1

## Header 2

    Header 1
    ========

    Header 2
    --------

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

# Header 1

## Header 2

ㅇㄹㅇㄹ

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1 #
    ## Header 2 ##
    ### Header 3 ###
    #### Header 4 ####
    ##### Header 5 #####
    ###### Header 6 ######

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> ## This is a header.
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:
>
>     Markdown.generate();

    > ## This is a header.
    > 1. This is the first list item.
    > 2. This is the second list item.
    >
    > Here's some example code:
    >
    >     Markdown.generate();

- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue

```markdown
- Red
- Green
- Blue

* Red
* Green
* Blue

- Red
- Green
- Blue
```

- `code goes` here in this line
- **bold** goes here

```markdown
- `code goes` here in this line
- **bold** goes here
```

1. Buy flour and salt
1. Mix together with water
1. Bake

```markdown
1. Buy flour and salt
1. Mix together with water
1. Bake
```

1. `code goes` here in this line
1. **bold** goes here

```markdown
1. `code goes` here in this line
1. **bold** goes here
```

Paragraph:
Code



    Paragraph:

        Code

---

---

---

---

---

    * * *

    ***

    *****

    - - -

    ---------------------------------------

This is [an example](http://example.com "Example") link.

[This link](http://example.com) has no title attr.

This is [an example][id] reference-style link.

[id]: http://example.com "Optional Title"

    This is [an example](http://example.com "Example") link.

    [This link](http://example.com) has no title attr.

    This is [an example] [id] reference-style link.

    [id]: http://example.com "Optional Title"

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

This paragraph has some `code` in it.

    This paragraph has some `code` in it.

![Alt Text](https://placehold.it/200x50 "Image Title")

    ![Alt Text](https://placehold.it/200x50 "Image Title") -->
