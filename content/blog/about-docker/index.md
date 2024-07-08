---
title: 도커 명령어 정리
date: "2022-04-06T22:12:03.284Z"
description: "자주 쓰이는 것들 정리"
---

##### 도커허브

도커 이미지 저장소 역할

##### 이미지 다운

```sh
docker pull 이미지명
```

##### 특정 태그 이미지 다운

```sh
docker pull 이미지명:태그명
```

##### 이미지 다운 확인

```sh
docker image ls
```

#####

```
REPOSITORY : 이미지명
TAG : 버전
IMAGE ID : 이미지 고유 id
CREATED : 이미지 만든 날짜
SIZE : 이미지 크기
STATUS : up 실행된시간
```

##### 이미지 삭제

```sh
docker image rm IMAGE ID(일부만 쳐도 됨)
```

##### 중단된 이미지 삭제시 - 컨테이너를 실행시 삭제 못함.

```sh
docker image rm -f 443
```

##### 컨데이너에서 사용하고 있는 전체 이미지

```sh
docker image rm $(docker image -q)
```

##### 이미지를 통해서 컨테이너 실행

```sh
docker create nginx
```

##### create + start (foreground)

```sh
docker run nginx
```

##### create + start (background)

```sh
docker run -d nginx
```

##### create + start + 컨테이너 명명 (background)

```sh
docker run -d --name awaji nginx
```

##### 포그라운드

- 내가 실행시킨 프로그램의 내용이 화면에서 실행되고 출력되는 상태
- 상태를 즉각적으로 확인할 수 있는 상태

##### 백그라운드

- 내가 실행시킨 프로그램이 컴퓨터 내부적으로 실행되는 상태

##### 호스트 포트 4000 과 컨테이너 포트 80 연결

- 서로 네트워크가 분리되어 있기 때문에 외부=>호스트 포트와 호스트-컨테이너 포트를 연결한다.

```sh
docker run -d -p 4000:80 nginx
```

##### 실행중인 컨테이너 조회

```sh
docker ps
```

##### 실행+중단 컨테이너 조회

```sh
docker ps -a
```

##### 도커 강제종료

```sh
docker kill
```

##### 도커 로그조회

```sh
docker logs 컨테이너 id
```

-마지막 열줄만

```sh
docker logs --tail 10 컨테이너 id
```

-기존거 + 실시간 조회

```sh
 docker logs --tail 0 -f  3a9
```

-기존거 없이 실시간만

```sh
 docker logs --tail 0 -f  3a9
```

##### 내부 컴퓨터 환경 접속

- 실행중만 접근가능

```sh
docker exec -it 컨테이너Id bash
```

##### 나가기

```sh
exit
```

#### 도커 볼륨

- 호스트의 저장공간을 공유한다.

#### 종료된 컨테이너 디버깅 팁

- n초동안 시스템을 일시정지 시킨다.

```

ENTRYPOINT ["/bin/bash" , "-c" , "sleep n"]
```

###

ENTRYPOINT : 컨테이너가 최초로 실행할때, 생성된 직후 수행되는 명령어. - 컨테이녀 실행시
RUN : 이미지 생성과정!에서 실행할 명령어 - 이미지 생성과정시
