---
theme: ../themes/arkcode
transition: fade
mdc: true
---

# Arkcode

<div class="flex items-center gap-2">
  <img src="./images/arkts.png" width="40" />
  <img src="./images/twoslash.svg" width="40" />
  <img src="./images/electron.svg" width="40" />
  <img src="./images/yesplaymusic.png" width="38" />
  <img src="./images/project-detector.svg" width="40" />
</div>

---
layout: center
---

# Visual Studio Code

---

# 为何要首当其冲，做 `vscode` 的适配？

<div grid="~ cols-2 gap-4" mt-10>
  <div v-click flex="~ col justify-center items-start" size-full rounded-xl bg="amber/40 dark:amber/20" block p="y-2 x-4">
    <div flex="~ items-center gap-2">
      <div class="i-ph-users-three-duotone text-size-8 text-black dark:text-amber" />
      <div>使用人数众多</div>
    </div>

```mermaid{class: 'size-full mt-4 rounded-xl'}
xychart
    title "2025 Stack Overflow Survey"
    x-axis [vscode, Visual Studio, Notepad++, IntelliJ IDEA, Vim, Cursor, PyCharm, Android Studio]
    y-axis "Usage (in %)" 0 --> 100
    bar [75.9, 29, 27.4, 27.1, 24.3, 17.9, 15, 15]
```

  </div>

  <div flex="~ col gap-4">
    <div v-click flex="~ col justify-center items-start" size-full rounded-xl bg="red/40 dark:red/20" block p="y-2 x-4">
      <div flex="~ items-center gap-2" size="full">
        <div class="i-ph-robot-duotone text-size-8 text-black dark:text-red" />
        <div>AI 代码编辑器横行，类 vscode 编辑器繁多 </div>
      </div>
    </div>
    <div v-click flex="~ col justify-around items-start" size-full rounded-xl bg="blue/40 dark:blue/20" block p="y-2 x-4">
      <div flex="~ items-center gap-2">
        <div class="i-ph-plug-duotone text-size-8 text-black dark:text-coolGray" />
        <div>社区活跃，插件市场庞大</div>
      </div>
      <div mt-3 flex="~ items-center gap-2">
        <div class="i-vscode-icons-file-type-vue text-size-7" />
        <div class="i-vscode-icons-file-type-typescript-official text-size-7" />
        <div class="i-vscode-icons-file-type-html text-size-7" />
        <div class="i-vscode-icons-file-type-css text-size-7" />
        <div class="i-vscode-icons-file-type-cpp3 text-size-7" />
        <div class="i-vscode-icons-file-type-python text-size-7" />
        <div class="i-vscode-icons-file-type-go text-size-7" />
        <div class="i-vscode-icons-file-type-java text-size-7" />
        <div class="i-vscode-icons-file-type-kotlin text-size-7" />
        <div class="i-vscode-icons-file-type-flutter text-size-7" />
        <img src="./images/arkts.png" width="30" />
      </div>
    </div>
  </div>
</div>

---
layout: end
---

# Thank you.
