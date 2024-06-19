---
title: SSR 생으로 구현하기
date: "2024-04-06T22:12:03.284Z"
description: ""
---

CSR에 열광하던 시기를 지나 다시 SSR을 위해 다양한 프레임워크에서 변화가 일어나고 있다.
새로운 기술이 나오면 화두에 오르다 그 기술의 단점이 점점 부각될때 그를 보완하는 또 다른 신기술이 나오는 형태로
프론트엔드는 끊임없이 발전하고 있다. 여기에 더불어 GPT 와 함께라면 머리 아프게 로직을 고민하지 않아도 최소한 레퍼런스 형태 그 이상으로 코드를 작성해준다.

이렇게 되면 개발자는 필요 없어지겠다 생각했지만, 아직은 좀 더 두고봐야 할 일이다.
내가 마주하고 있는 대부분의 것들은 인간의 머릿속에서 나오고 있다. AI 가 모든걸 대체할 수 있겠지만 그 대체한 것에 어떤 문제점이 도사리고 있을지는 모를일이기 때문이다.

앞으로 대체될 수 있는 개발자는 무수히 많을것이고 나도 그 중 한명이 될 수도 있다.
누가 대체할 수 없을까 생각해보았다. 내 결론은 핵심을 알고 있는 사람이다.
그것이 비즈니스의 핵심이 될 수 있고 코드 로직의 핵심이 될 수 있다.

그리고 나는 핵심적인 것들을 파악하는 능력을 기르고자 한다. 앞으로 next.js 가 더욱 더 발전하든 previous.js 가 나오든
해당 프레임워크가 생겨난 이유와 동작원리를 알고 있다면 앞으로 나올 프레임워크도 예측가능한 상태로 만들 수 있다고 생각한다.

서론이 길었지만 사실 그냥 한번 궁금해서 해보고 싶었다.
react로 next.js 를 사용하지 않고 서버사이드 렌더링을 해보려고 한다.