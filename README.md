# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```
### serve

```
$ yarn serve
```
This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```
$ GIT_USER=lbykoo yarn deploy

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


yarn write-translations --locale zh-Hans
到对应的语言目录下载。
本地测试代码：
yarn run start --locale zh-Hans  
后面跟不同语言
