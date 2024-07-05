---
title: Git常用指令
date: 2024-07-05
---

# 1. set registry

```bash
# 设置国内镜像源
npm config set registry https://registry.npm.taobao.org

yarn config set registry https://registry.npm.taobao.org

# 查看设置
npm config get registry

yarn config get registry
```

# 2. stash

#### 缓存本地修改

```bash
# 保存当前未commit的代码
git stash

# 保存当前未commit的代码并添加备注
git stash save "备注的内容"

# 列出stash的所有记录
git stash list

# 删除stash的所有记录
git stash clear

# 应用最近一次的stash
git stash apply

# 应用最近一次的stash，随后删除该记录
git stash pop

# 删除最近的一次stash
git stash drop
```

# 3. reset

#### 代码回滚，撤销commit

```bash
# 让 commit 记录强制回溯到某一个节点, 不会保存修改内容
git reset --hard <HEADId>

# 除了回溯节点之外，还会保留节点修改的内容
git reset --soft <HEADId>

# 场景：对于不小心把不该提交的内容commit了，这时想改回来只能在commit一次，这样就会出现一个黑历史

# 恢复最近一次commit，保持干净的commit记录（未push的commit）
git reset --soft HEAD^ 

# 由于本地与远程分支有差异，需要强制推送来覆盖被reset的commit
git push -f
```

# 4. cherry-pick

#### 将指定commitId复制到其他分支

```bash
git cherry-pick <HEADId>
```

# 5. 重置本地代码

#### 远程仓库代码强制覆盖本地，可以强制去掉merge

```bash
# 拉取所有更新，不同步
git fetch --all

# 本地代码同步线上最新版本(会覆盖本地所有与远程仓库上同名的文件)，git reset 指令把HEAD指向master最新版本
git reset --hard origin/<branch> 

git pull --progress -v --no-rebase origin <branch>
```

# 6. rebase

#### 在进行rebase合并代码，出现冲突时：

1. 解决冲突，使用 git add . 标记冲突已解决
2. 使用 git rebase --continue 继续下一个进程
3. 当想停止合并时，使用 git rebase --abort  恢复代码

#### 删除某次提交

```bash
# 找到要删除的commit上一次的commitId(git log的下面)
git rebase -i <上一次commitId>

# 按i进入vim插入页面，将要删除的commit前面的pick改为drop
# 按esc退出插入页面，:wq保存退出

# 查看当前状态(有冲突解决冲突，没有就跳过)
git status

git push origin <branch> -f
```

# 7. format-patch

#### 创建补丁

```bash
# 为最近一次提交创建补丁
git format-patch -1

# 为最近的N次提交创建补丁，例如最近3次
git format-patch -3

# 创建特定范围内的补丁，例如从commitA到commitB之间所有提交
git format-patch commitA^..commitB

# 基于分支的补丁，为一个分支上比另一个分支多出的提交创建补丁
# 所有在feat-branch上，但不在master分支上的提交，都会被创建为补丁
git format-patch master..feat-branch

# 定制输出的补丁文件名，使用 -o 或 --output-directory 选项指定输出目录
# 这会将最后一次提交的补丁文件保存到 patches/ 目录下
git format-patch -1 -o patches/
```

# 8. apply

#### 应用补丁，git apply 命令用于将补丁文件中的更改应用到当前工作目录的文件中。它不会自动创建新的提交。

```bash
git apply /path/to/patchfile.patch

# 如果你想检查补丁是否能够成功应用（即执行一个干运行），可以使用 --check 选项
git apply --check /path/to/patchfile.patch

# - 如果补丁应用成功，但你希望撤销更改，可以使用 --reverse 选项
git apply --reverse /path/to/patchfile.patch
```

# 9. am

#### 应用补丁，git am 命令则用于将一个或多个从邮箱导出的补丁文件应用到当前分支，并且为每个补丁创建一个新的提交。这个命令特别有用，当你需要保留原始提交信息（比如提交作者、提交信息等）时。

```bash
git am /path/to/patchfile.patch

# 如果你有多个补丁文件，只需要指向包含所有补丁文件的目录即可
git am /path/to/patches/*

# 如果在应用某个补丁时出现冲突，git am 会停止应用操作并让你解决冲突。解决冲突后，你可以使用以下命令继续应用剩余的补丁
git am --resolved

# 如果你决定不应用当前的补丁并跳过它
git am --skip

# 若要中止整个应用补丁的操作并回到原始状态
git am --abort
```