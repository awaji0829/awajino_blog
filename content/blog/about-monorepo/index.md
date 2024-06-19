---
title: 모노레포의 효율성 (pnpm + turbo)
date: "2024-04-06T22:12:03.284Z"
description: "모노레포를 직접 구성해보며 느낀점"
---

나는 현재 마이크로레포로 회사에서 프로젝트를 관리하고 있다.<br/>
프론트 개발자가 적고 프로젝트의 갯수는 많다.<br/>
그 중에서도 같은 모듈로 여러 프로젝트에 쓰이는 경우가 많고<br/>
해당 모듈이 업데이트 될때마다 각 프로젝트에 수정을 넣어줘야 하기에<br/>
모노레포라는 것에 관심을 두게 되었다.

일단 모노레포를 직접 구성해보면서 이해해보기로 했다.

### 모노레포는 어떻게 프로젝트들을 관리하는가?

##### apps<br/>

┣ app1<br/>
┗ app2

##### packages<br/>

┗ ui<br/>
┗ ts-config<br/>
┗ eslint-config<br/>

<br/>
apps 는 나의 프로젝트들이 들어있는 폴더이고 <br/>packages는 내가 저 apps 안의 프로젝트들에서<br/> 사용할 수 있는
package 들을 모아둔 폴더이다.<br/><br/>
나는 npm 혹은 yarn 을 이용해 패키지를 설치해 사용하는 것처럼<br/>
저 packages 안에 공통모듈 혹은 공통설정들을 두고 사용할 수 있는 것이다.<br/>
<br/><br/>
이런식으로 해당 패키지의 이름을 설정해주고 <br/>
packages/ui/package.json <br/><br/>

    "name": "@repo/ui",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",

프로젝트 안에서 디펜던시 안에 해당 패키지를 추가해준다. <br/>
apps/app1/package.json<br/>
<br/>

    "devDependencies": {
       "@repo/ui": "workspace:*",
       "@repo/eslint": "workspace:*",
       "typescript": "^5",
       "@types/node": "^20",
       "@types/react": "^18",
       "@types/react-dom": "^18",
       "eslint": "^8",
       "eslint-config-next": "14.2.4"
    }

이는 내가 공통적으로 가져가고 싶은 것 들을 (eslint, config, style, ui .. 등)<br/>
레포안의 패키지로 만들어 공유하는 시스템이다. <br/> <br/>
각각의 패키지 폴더안은 pnpm init 을 하여
package.json 을 생성해주었다.
<br/> 이는 각각의 패키지가 독립적으로 버전관리가 가능하다.<br/>
다만 유의해야 할 점은 공통의 패키지이기 때문에 수정점이 해당 패키지를 사용하는 모든 프로젝트에 미칠 영향을 고려해야 된다는 것이다.<br/><br/>
이는 때로 장점이 될 수도 단점이 될 수도 있기 때문에.<br/>프로젝트의 리스크를 잘 고려해가며 작업해야겠다.

### turbo를 선택한 이유?

[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

![Chinese Salty Egg](./salty_egg.jpg)

######

     - good) setState('gimbab')
     - nono) this.state = 'gimbab' or state = 'gimbab'

`pnpm init`

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
-`pnpm init` here in this line

- **bold** goes here
```

pnpm init

https://velog.io/@jma1020/turborepo-pnpm-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-%EC%82%AC%EC%9A%A9%EA%B8%B0-%EC%84%A4%EC%A0%95
이런 모노레포를 형성시킬 수 있는 패키지 중 대표적으로 turborepo 존재합니다.
해당 turborepo 사이트에서도 설명해주지만, 큰 특징 9개를 나열해보겠습니다.

1. Incremental builds
   작업 진행을 캐싱해 이미 계산된 내용은 건너 뛰는 것을 의미합니다. 빌드는 딱 한 번만 하는 것을 목표로 합니다.

2. Content-aware hasing
   타임스탬프가 아닌 콘텐츠를 인식하는 방식으로 해싱을 지원합니다. 이를 통해 모든 파일을 다시 빌드하는 것이 아니라 변경된 파일만 빌드합니다.
3. Cloud caching
   클라우드 빌드 캐시를 팀원 및 CI/CD와 공유합니다. 이를 통해 로컬 환경을 넘어 클라우드 환경에서도 빠른 빌드를 제공합니다.
4. Parallel execution
   모든 코어를 사용하는 병렬 실행을 목표로 합니다. 지정된 태스크 단위로 의존성을 판단해 최대한 병렬적으로 작업을 진행합니다.

5. Task Pipelines
   태스크 간의 연결을 정의해서 빌드를 언제 어떻게 실행할지 판단해 최적화합니다.
6. Zero Runtime Overhead
   런타임 코드와 소스 맵을 다루지 않기 때문에 런타임 단계에서 파악하지 못한 리스크가 불거질 위험이 없습니다.
7. Pruned subsets
   빌드에 필요한 요소만으로 모노 레포의 하위 집합을 생성해 PaaS 배포 속도를 높입니다.
8. JSON configuration
   별도의 코드 작업 없이 JSON 설정으로 터보를 사용할 수 있습니다.
   // turbo.json { "baseBranch": "origin/main", "pipeline": { "build": { ... } } }
9. Profile in browser
   빌드 프로필로 빌드 과정을 시각화하면 병목 지점을 쉽게 찾을 수 있습니다.

- pnpm init
- apps 폴더와 packages 폴더 만들기
- yaml 파일
- turbo 설치
- apps/ my-app
- pnpm init &pnpx create-next-app@latest 설치

루트 디펜던시 pnpm install [dependency name] -w (root에 실수로 dependecy를 추가하는 것을 방지하기 위해서)

완료된거

1. pnpm 설치
2. 폴더구조 구성
3. pnpm yaml 파일 생성
4. next 플젝 추가
5. 터보설치

해야될거

- eslint 설치 굿 !!!

- lock.yaml 파일이 그런 지도같은 역할?
- index.js 에서 각종 설정을 한 후에
- packagejson 에 필요한 패키지들을 추가한 후에
  name을 경로로 쓰일 이름으로 지정 그 이름을 가지고 이제
  apps 에서 패키지로 쓸 수 있다
  해당 프로젝트에 devdependcies 에 "@repo/eslint": "workspace:\*",
  요렇게 추가를 해주고 pnpm install 하면 노드모듈에 들어온다

https://velog.io/@yoosion030/PNPM%EC%9C%BC%EB%A1%9C-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0

- tsconfig 설정
- ui 공유해보기
  UI ESLINT 설정, 터보gen 설정

- 터보 제네레이터 설치?

- 프리티어 설정
