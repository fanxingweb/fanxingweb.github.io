---
title: ssh连接服务器
date: 2024-07-05
---

# 连接服务器

```bash
ssh 用户名@服务器地址
```

# 本地文件/文件夹上传到服务器

```bash
# 上传文件
scp 本地路径 用户名@服务器地址:服务器路径

# 上传文件夹
scp -r 本地路径 用户名@服务器地址:服务器路径
```

#### 还有一种方法是使用rsync命令，它不仅可以用于上传文件，还可以同步文件更改，通常用于备份和镜像。

```bash
rsync -avz 本地路径 用户名@服务器地址:服务器路径

# -a选项表示归档模式，它保留了文件的权限和时间戳。
# -v表示详细模式。
# -z表示压缩数据。
```

# 在服务器上创建文件

```bash
# 使用touch
touch example.txt

# 使用echo
echo "hello word" > example.txt

# 使用vi/vim
vim example.txt
```