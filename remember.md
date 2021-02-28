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
