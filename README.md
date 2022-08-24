## Description

눈쟁이 커뮤니티 백엔드

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## vscode를 사용하신다면 필수 설치 extention

- [Gitmoji](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode) - 커밋시 이모티콘 사용
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - Code formatter
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter
- [Live Share Extension Pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) - 코드 같이 짜거나 뭐 설명하거나 할떄 씁니다.
- [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) - ssh, docker, wsl 등에 접근하여 vscode로 코드작성 가능하게 해줍니다.

## 코드 작성 규칙

- 최대한 모듈 형태로 분리 해야 MSA 형태로 변형이 가능합니다.
- 파일명 작성은 "하는일.형태.ts" (ex: error.fileter.ts - 에러 [필터]() 이다, auth.guard.ts - 인증 [가드]() 이다.) 이며, 클레스명은 "하는일형태" (ex: export class ErrorFilter {}, export class AuthGuard {})입니다.
- 변수명은 의미 있는 것으로 최대한 작성합니다. (반복문을 위한 i,j,k 는 예외)
- class 의 접근제한자는 생략하지 않습니다.
- 함수나 멤버, 프로퍼티는 리턴값은 생략하지 않습니다.
