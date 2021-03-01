## nodeJS 다운받기

[nodejs API document](https://nodejs.org/api/)

공식 사이트에서 다운받거나 brew를 사용해서 다운로드

## 시작하기

index.js를 만든 다음

터미널에 아래내용을 입력

```terminal
npm init
```

실행한 후 내용을 입력

package.json생성

## express

[express API document][https://expressjs.com/]

터미널에 아래내용을 입력

```terminal
npm install express
```

package.json을 보면

```
"dependencies" :{
    "express" : "version"
}
```

이렇게 버전이 생성된걸 볼 수 있음

## .gitignore

git에 push하기전에 올리면 안되거나 용량이 많아서 굳이 올릴 필요가 없는 목록을 미리 .gitignore에 올릴 수 있다.

.gitignore란 파일을 만들고,

[nodejs ignore list](https://github.com/github/gitignore/blob/master/Node.gitignore)
여기에 있는 양식을 그대로 복사해서 붙여넣자,

추가로 pakage-lock.json도 적어주자

## frist git push

1. git에 repository생성하기

2. REAMDNE.md 만들고 git에 생성한 repositroty url복사해서 터미널에 아래와 같이 입력

```
git remote add origion https://github.com/peacepiece7/wetube.git

git commit -m "Initail Commit"

git push origin master
```

- 추가로 저장소만들면 이렇게 잘 나와있음
  **…or create a new repository on the command line**<br>
  echo "# wetube" >> README.md<br>
  git init<br>
  git add README.md<br>
  git commit -m "first commit"<br>
  git branch -M main<br>
  git remote add origin https://github.com/peacepiece7/wetube.git<br>
  git push -u origin main<br>
  **…or push an existing repository from the command line**<br>
  git remote add origin https://github.com/peacepiece7/wetube.git<br>
  git branch -M main<br>
  git push -u origin main<br>
  **…or import code from another repository**<br>
  You can initialize this repository with code from a Subversion, Mercurial, or TFS project.<br>

  이거 그냥 붙여넣으면 알아서 만들어짐

## package.json에 scripts 추가하기

```js
const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on : http://localhost:${PORT}`);
}
app.listen(PORT, handleListening);
```

이걸 실행하려면 터미널에

`node index.js`

라고 쳐야하지만 귀찮으니까 package.json에 scripts를 추가해주자

```
// package.json
 "scripts": {
    "start": "node index.js"
  },
```

## app.get (추가중)

```js
function handleHome(req, res) {
  res.send("hellow form home");
}

app.get("/", handleHome);
```

get("http주소이름",콜백함수)이고
콜백함수는 인자로 request, resopnsive를 받음

## babel

[babel](https://babeljs.io/)

사실 공식 문서를봐도 잘 모르겠다.

다른 개발자가 제시한 해결법은 아래와 같다.
[babel참고자료](https://babeljs.io/docs/en/babel-preset-env)

1. 터미널에 아래 내용을 입력 후

```
npm install @babel/node
npm install @babel/core
npm install @babel/preset-env
npm install core-js@3
```

2. .babelrc 파일을 만들고 아래 내용을 입력해준다.

```js
{
    "presets": [
      ["@babel/preset-env",{"useBuiltIns":"entry","corejs":3}]
    ]
  }
```

3. package.json도 script start를 아래 내용으로 바꿔준다.
   `"bable-node index.js"`

## package.json의 dependency vs devdependency

- dependency

의존이란 뜻으로, 개발환경에 영향을 주는 모듈을 뜻한다.

- devdependency

개발자에 의존하는 것, 개발환경에 영향을 주지 않고 개발자에게 편의를 제공하는 모듈을 뜻한다.<br>
마지막에 -D를 붙여서 다운로드 하면 된다.

`npm install moduleName -D`

## nodemon

[nodemon](https://www.npmjs.com/package/nodemon)<br>
[nomemon doc](https://www.npmjs.com/package/nodemon)

`npm install nodemon -D`

package.json을 아래로 변경

`"start": "nodemon --exec babel-node index.js"`

above code work automatically restarting when you modifiied applications<br>
공식 문서를 보면 pug추가하는 법이 나와있고(추가해놓긴 했는데 아마 scss도 가능할 듯)<br>
delay주는 방법이나 따로 culry blanket을 만들어서 옵션을 추가하는 법등 다양하게 나와있음

## app.use

```js
app.use(function (req, res, next) {
  res.send("Hello World");
});
```

순차적으로 실행되는 미들웨어라서 순서를 조심해야한다.

```js
app.use(function (req, res, next) {
  console.log("hellow world");
  next();
});
```

위와 같이 미들웨어로서의 역할을 하려면 next()로 다음 함수로 넘어가도록 해줘야 함

## morgan

[morgan](https://www.npmjs.com/package/morgan)

Dexter Morgan이라는 드라마의 인물로 혈흔을 분석하고 밤에는 시리얼 킬러로 활동함 ㅋㅋㅋ<br>
혈흔을 분석해서 package name을 morgan아라고 지었나보네<br>
재밌어 보이니까 다응메 한 번 찾아보자<br>

- 로그인 할 떄 로그관리를 할 수 있게 도와주는 미들웨어

`npm install morgan`
으로 다운 받음

reaeme에서는 var, require로 사용해라지만 이제 var는 쓰지 않으니까 import해주자

```js
var morgan = require("morgan");
import morgan from "morgan";
```

아래와 같이 실행하면

```js
app.use(morgan("combined"));
```

이와 같은 로깅값을 얻을 수 있다.

```
::1 - - [01/Mar/2021:03:12:44 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36"
```

여러 옵션들이 있는데 combined에서 부분적으로 짤라내서 보여줌

```js
app.use(morgan("short"));
app.use(morgan("tiny"));
app.use(morgan("short"));
app.use(morgan("dev"));
```

옵션에서 특정 값을 만족할 때만 랜더링하는 if문을 넣는 식으로 쓴다고 함, token , http setting부분은 잘 모르겠다.. fs가 file system이랑 관련있다는 거 정도..?

## cookie parser

[cookie parser](https://www.npmjs.com/package/cookie-parser)

`npm install cookie-parser`

## body parser

[body-parser](https://www.npmjs.com/package/body-parser)

`npm install body-parser`

데이터를 body에 담아서 app.post()로 보낼 때 body-parser가 없으면 undefined를 받게 되기 때문에 사용해야 한다.

이런 형식의 body를 보낼 때를 말함

```js
{
  userID : "힝",
  password : "나도몰라"
}
```

하지만 [body-parser](https://medium.com/@chullino/1%EB%B6%84-%ED%8C%A8%ED%82%A4%EC%A7%80-%EC%86%8C%EA%B0%9C-body-parser%EB%A5%BC-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-%ED%95%98%EC%A7%80%EB%A7%8C-body-parser%EB%A5%BC-%EC%93%B0%EC%A7%80-%EB%A7%88%EC%84%B8%EC%9A%94-bc3cbe0b2fd)가 없어서도 이렇게 하면 쓸 수 있다고 함.<br>
나중에 참고해서 읽어보자

> json으로 body parsing하기

```js
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// json으로 body parsing할 때 써보자
// parse application/json
app.use(bodyParser.json());

app.use(function (req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.write("you posted:\n");
  res.end(JSON.stringify(req.body, null, 2));
});
```

나중에 json형식으로 데이터를 주고 받을 떄 쓸 수 있을 듯 나중에 req로 확인해보자,,

## JS export, export defalut

- export 사용하기

export로 데이터를 보낼 떈 아래방식을 사용하고

```js
//이렇게 변수, 클레스, 함수명 앞에 붙여서 사용하거나
export const sayhi = () => {
  console.log("hi");
};

//아래에 묶어서 사용할 수 있다.
function sayHellow() {
  console.log("heelow");
}
function sayBye() {
  console.log("bye");
}

export { sayBye, sayHellow };
```

받아올 땐

```js
import { sayBye, sayHellow } from "/user.js";
// 받아올 데이터가 많일 경우엔 esterisk로 표기
import * as user from user.js
```

> 가져올 떈 구체적인 사항을 명시하는 것이 로딩 속도를 올리는데 좋음

- export default

export default를 사용하면 **'해당 모듈엔 개체가 하나만 있다’**는 사실을 명확히 나태낼 수 있다.<br>
모듈 전체를 하나의 개채로 지원함

```js
// 📁 user.js
export default class User {
  // export 옆에 'default'를 추가해보았습니다.
  constructor(name) {
    this.name = name;
  }
}
```

```js
// 📁 main.js
import User from "./user.js"; // {User}가 아닌 User로 클래스를 가져왔습니다.

new User("John");
```

이런식으로 주고 받을 수 있음

| named export            | default export                  |
| :---------------------- | :------------------------------ |
| export class User {...} | export default class User {...} |
| import {User} from ...  | import User form ...            |
