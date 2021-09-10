## 运行

```sh
# 安装依赖
pnpm install
# 启动开发服务器
pnpm dev
# 打包项目
pnpm build
```

## FQA

1. 本项目在 vscode 编辑器里面运行最好安装 vscode 插件 volar 避免使用 vetur，两者有一定的冲突，volar 对 vue3 的提示更加友好
2. 本项目使用 pnpm 作为依赖管理工具，请安装 pnpm 使用。
3. 复制本项目到其他地方运行时，安装依赖前请先进行 git 仓库初始化，因为安装依赖时会对 husky 进行初始化，如果本目录下没有 git 仓库，则会失败。

## git 提交规范(Angular 规范)

> 1.  feat 新增一个功能
> 2.  fix 修复一个 Bug
> 3.  docs 文档变更
> 4.  style 代码格式（不影响功能，例如空格、分号等格式修正）
> 5.  refactor 代码重构
> 6.  perf 改善性能
> 7.  test 测试
> 8.  build 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）
> 9.  ci 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等
> 10. chore 开发工具变动(构建、脚手架工具等)
> 11. revert 代码回退
