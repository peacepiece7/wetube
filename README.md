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

## express install

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

## frist git push (github)

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

## express app.get (추가중)

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

## npm package nodemon

[nodemon](https://www.npmjs.com/package/nodemon)<br>
[nomemon doc](https://www.npmjs.com/package/nodemon)

`npm install nodemon -D`

package.json을 아래로 변경

`"start": "nodemon --exec babel-node index.js"`

above code work automatically restarting when you modifiied applications<br>
공식 문서를 보면 pug추가하는 법이 나와있고(추가해놓긴 했는데 아마 scss도 가능할 듯)<br>
delay주는 방법이나 따로 culry blanket을 만들어서 옵션을 추가하는 법등 다양하게 나와있음

## express app.use

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

## npm package morgan

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

## npm package cookie parser

[cookie parser](https://www.npmjs.com/package/cookie-parser)

`npm install cookie-parser`

## npm package body parser

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

> 예를 들어

```js
// main.js
import express from "express";
const app = express();
app.get("/", filehandler);

export default app;
```

이렇게 메인에서 variable app을 export 해주면,

```js
// sub.js
import app from "./main.js";
app.listen(3000);
```

이렇게 sub.js에서 app.liste만 적어서 main애서 rounte설정을 끝마쳤기 때문에 상관없음

⭐️ 이번 프로젝트에서 export, export default를 모두 사용하는데,<br>
export default는 routers에서, export는 controller에서 씀<br>
이 예제를 보고 어떤 경우에 export, defalut를 사용하는지 알아보자.<Br>

```js
// main.js
export tesVariable=()=>{
  express something like structures..
}
// sub.js
{ testVariable } form "./main.js"
```

❗️❗️❗️ 매우중요한 거

file:로 브라우저에서 script를 열면, export import가 작동하지 않으니까 주의!!<br>
http로 통신해야 작동합니당

## express.Router()

[express.Router()](https://expressjs.com/en/4x/api.html#express.router)<br>
end 포인트의 /url을 만들거나(get함수를 사용해서)<br>
app.use()의 middleware를 만들 수 있다.(로그인이나 인증 할 떄)

```js
const router = express.Router([options]);
```

```js
// 어떤 요청이든 이 라우터를 통해서 호출된다.
router.use(function (req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

// /events로 끝나는 모든 요청을 처리함!
// depends on where the router is "use()'d"
// 하위 라우터임! 랜딩할 페이지의 위치나 로그인 조건 등을 설정할 수 있음
router.get("/events", function (req, res, next) {
  //you can express like above ex) res.render("main.pug");
});
```

calendar/events 아렇게 **precedence(parents route)가 calendar인 mini app을 만들 수 있다.**

```js
app.use("/calendar", router);
```

## router를 따로 분리해서 적기

Router file을 따로 만들어서 관리하기

```js
// router.js
import express from "express";

// userRouter말고도, videoRouter, globalRouter등을 만들 것이기 때문에 export default를 하지 않는다.
export const userRouter = express.Router();

userRouter.get("/edit", (req, res) => {
  res.send("edit index");
});
```

필요한 라우터를 작성하고, app init에서 app.use로 parent route 설정해주기

```js
// app,js
import { userRouter } from "./main.js";
app.use("/user", userRouter);
```

이렇게 하면 localhost:xxxx/user/edit 이라는 라우터가 만들어 졌다.

## routes 파일로 라우터 이름 모아서 관리하기!

`routes.js`

파일을 만들어서

```js
// routes.js
const routes = {
  home : HOME,
  user : USER,
  userDetail : USER_DETAIL,
  join : JOIN,
  login : LOGIN.
  logout : LOGOUT
}

const HOME = '/'
const USER = '/user'
const USER_DETAIL = '/:id/'
const JOIN = '/join'
const LOGIN = '/login'
const LOGOUT = '/logout'

export default routes
```

routes를 사용해야할 때 "home","userDetail".. 이런 식으로 외워서 쓰지 않고  
routes.user, routes.home 이런식으로 작성해준다.

```js
//routers.js
import routes from "./routes.js";
import express from "express";

const app = express.Router();

app.get(routes.home, (req, res) => res.send("home page!"));
app.get(routes.user, (req, res) => res.send("user page"));
// 기존방식으로 쓰면 아래와 같다.
app.get("/join", (req,res) => res.send("join Page!")
app.get("/login", (req,res) => res.send("login page!"))
```

이런식으로 내가 라우팅할 페이지의 이름을 정해두면,  
나중에 조건문을 써서 페이지를 랜더링 해야할 때(아이디가 일치할 경우나, 특정 조건이 맞을 경우)  
작성이 수월해진다.  
(근데 이 방식은 케바케인듯 나는 그냥 한 곳에 다 쓰는게 편핼 거 같은뎅)

## MVC

### 1. MVC 모델 소개

MVC (Model View Controller)

M = data(그림판에 넣을 데이터)<br>
V = how does the data look(그림판)<br>
C = function that looks for the data(그림판으로 가는 기능 컨트롤러)<br>

앞으로 MVC를 사용해 아래 것들을 만들거임

1. Model은 mongodb로 data를 저장하고
2. View는 pug,scss를 사용해서 화면을 꾸미고
3. Controller는 CRUD+login등 기능들을 구현하는 오브젝트를 만들거임!(controller는 view, seaching, login, data parsing등 다양함)
   ⚠ Modules work only via HTTP(s), not in local files

|If you try to open a web-page locally, via file:// protocol, you’ll find that import/export directives don’t work.|
|Use a local web-server, such as static-server or use the “live server” capability of your editor, |
|such as VS Code Live Server Extension to test modules.|

### 2. MVC 방식으로 controller 작성하기

controller.js 파일을 만들어서 router.js에서 랜더링해오는 페이지를 작성하는 부분을 따로 작성해준다.  
제어하는 부분을 따로 만들어주는 것!

```js
// controller.js
export const home = (res, req) => res.send("home page!");
```

export 했기 때문에 따로 import를 적지 않아도 내가 home 이라는 변수를 사용하면 자동으로 import가 작성된다.
그럼 rotes.js에 controller를 더해주자

```js
import express from "express";
import routes from "./routes.js";
// import는 직접 안 적어도 알아서 적어짐( 헷갈리지 않게 직접 적어도 되공 )
import { home } from "./controller.js";

const app = express.Router();

app.get(routes.home, home);
```

## PUG (view engin)

terminal에

`npm install pug`

해주시고

```js
// app.js

app.set("view engin", "pug");
```

view/home.pug를 만들고 내용을 작성하면 됨

### 폴더 위치를 수정하고 싶다면?

```js
app.set("views", __dirname + "/views");
```

이렇게 /views로 시작하는 폴더 안에 pug를 넣겠다 라고 지정할 수 있는데  
기본 default가 /views이기 떄문에 굳이 적을 필요는 없다.

express documemt에 가보면  
views는 process.cwd() + "/views" 라고 되어 있는데  
아래와 같이 적어ㅓ 확인해 볼 수 있다.

```js
console.log(`__dirname`, __dirname);
console.log(`process.cwd()`, process.cwd());
console.log(`app_root_path`, app_root_path);
```

![참고 nodeJs doc](https://nodejs.org/docs/latest/api/modules.html#modules_dirname)
![참고 app_root npm doc](https://www.npmjs.com/package/app-root-path)

1. 현제 실행하는 파일의 절대경로를 의미한다.
2. 현제 실행한 node js의 파일 경로를 의미함을 알 수 있다.
3. 프로잭트 루트를 찾아준다.

### plain html, css를 view engin으로 사용하고 싶다면?

![여기 링크를 누르면 자세한 내용을 볼 수 있음!](https://velopert.com/294)

public 이란 폴더를 만들어서 css를 저장

1. views란 폴더를 만들어러 html 저장
2. npm install ejs
3. html랜더링 해오기, 폴더 위치는 상관없음

```js
app.get("/", (req, res) => render("index.html"));
```

4. app.js에서 이렇게 app.set을 설정해준다.

사실 이 부분은 express api에서 봤는데 이해가 잘 안 됬음... ejs란 패키지를 처음 봐서 그런 듯 ㅎ;  
위 사이트에서 ejs에 관해 알려줌

```js
var express = require("express");
var app = express();
var router = require("./router/main")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

var server = app.listen(3000, function () {
  console.log("Express server has started on port 3000");
});
```

3번 째 줄은 router를 app으로 보낸다는 의미고,
5번째 줄은 server가 이해할 수 있게 html이 어디에 위치해 있는지를 정의해 줌
6-7줄은 서버가 html을 랜더링 할 때 ejs를 사용하라고 알려준는 것

5. static file 다루기

static file은 .js .css image file 등 을 말한다고 함

```js
app.use(express.static("public"));
```

이렇게 static파일의 위치를 지정해주면 된다, public 이란 폴더를 만들어서 그 안에 css. js 랜더링된 페이지에서 정적으로 작동할 파일을 넣겠다는 의미

### 왜 pug를 써야하나? ( block, extends )

에전엔 몰랐는데 큰 프로젝트를 할 경우 일일이 html을 수정하면 매우 귀찮아질 수 있다고 함  
이때 .html이 지원하지 않는 기능이 있는데

block, extends 임

html skeleton 을 작성하기 위해 ./layouts/main.pug 파일을 만듬

block "name"

을 추가해줌

```pug
doctype html
html
    head
        title WeTube
    body
        main
            block content
        footer
            span &copy; WeTube
```

이제 확장할 pug 파일에 extends - block을 사용함

home.pug 에 확장해보자

```pug
extends layouts/main
block content
    p hellow world
```

이렇게 작성하면 main.pug의 내용이 모두 home.pug로 옮겨지고,
block content 다음 줄에 indent한 내용은 main.pug의 main tag안에 작성하는 것 처럼 같은 내용을 가질 수 있음

### inclue로 partials 추가하기

./views/partails/header.pug
를 만들어서 이런 것을 적었다고 치고 (내용은 중요치 않음)

```pug
header.header
    .header__column
        i.fab.fa-youtube
    .header__column
        ul
            li
                a(href="#") Join
            li
                a(href="#") Log In
```

./views/layout/main.pug 에 위의 내용을 header tag 안에 붙여 넣기하자  
이렇게 안 하고 main.pug에 다 적어도 상관없음, 어차피 main.pug가 html skeleton이니까!

```pug
doctype html
html
    heder
        title hellow world page
    include ../partials/header.pug
    body
        block content
    footer

```

header.pug에 header tage가 있으니까 indentation line을 header tag와 동일한 위치에 include해줌!  
차이가 있는진 모르겠는데 header.pug에 header tag빼고 클래스만 적어서 같이 작동함 ㅇㅇ
이건 적다보면 감으로 알듯

- 3/9일 2.15까지 함
