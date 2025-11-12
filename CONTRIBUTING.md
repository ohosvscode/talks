# 贡献

- 每个talk都由具体日期命名，如 `2025-11`。
- talk目录下创建必须包含 `slides.md` 文件，该文件内容将由 [slidev](https://cn.sli.dev/) 直接渲染，这是一个为开发者打造的演示文稿工具，因此请撰写符合 `slidev` 语法的 `markdown` 文件内容。
- 当一个分支被合并到主分支，将直接使用 `Netlify` 自动构建并部署到 `https://talks.arkcode.dev` 下，可供公开访问。访问的路径比如talk目录名称为 `2025-11`，则访问路径为 `https://talks.arkcode.dev/2025-11`。
- 如果您要对此项目进行修改，又不想克隆到本地污染您干净的本机环境，可以使用 `github codespaces` 等在线编辑器进行编辑，这类在线编辑器打开后会自动为您安装依赖，您无需执行依赖安装命令。
- 建议安装 [.vscode/extensions.json](.vscode/extensions.json) 中推荐的扩展，以获得更好的撰写体验!

## 安装依赖

```bash
pnpm install
```

## 开发模式运行某个 `talk`

这里假设你要开发 `2025-11` 这个 `talk`，则执行以下命令：

```bash
pnpm slidev 2025-11/slides.md
```

## 构建所有 `talks`

```bash
pnpm run build
```
