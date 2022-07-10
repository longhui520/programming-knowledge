---
sidebar: auto
---
# git 常用命令
## 变量对照
| 名称 | 含义|
| --- | --- |
| remoteName | 远程仓库名 |
| branchName | 分支名称(本地和远程分支同名) |
| localBranchName | 本地分支名称 |
| remoteBranchName | 远程分支名称 |
## 分支的关联与取消
### 关联分支
```bash
git branch --set-upstream-to=remoteName/branchName localBranchName
```
### 推送时关联
```bash
# 不要求远程分支存在，没有远程分支时，远程自动建立一个和本地分支一样名称的分支
git push -u remoteName branchName
git push -u remoteName localBranchName:remoteBranchName
```
### 取消关联分支
```bash
git branch --unset-upstream-to=localBranchName
```

## 查看分支
### 查看本地分支
```bash
git branch -v
```
### 查看本地分支与远程的关联情况

```bash
git branch -vv
```
## 查看提交记录
```bash
# 显示整个提交记录，但是跳过任何合并内容
git log --no-merges
git log --first-parent

```
## 杂项
1. 本地工作区文件恢复
将工作区的内容删除后，重新检出文件，就可以恢复文件(未放入暂存区的内容不可恢复)
```bash
# git checkout <filename|dirname>
```

2. 远程分支删除后，删除本地分支及关联
```bash
# 删除远程分支
# git push <remoteName> --delete <branchName>
# 建立本地和远程分支的关联
# 方法1 git branch --set-upstream-to=<remoteName/branchName localBranchName>
# 方法2 git push -u <remoteName> <branchName>
# 上面2种均可以关联,但是git push -u 可以在远程仓库无关联分支是使用，但是必须是关联当前分支，
# 且相当于执行 git push <remoteName> <branchName> && git branch --set-upstream-to=<remoteName/branchName localBranchName>
# 取消本地和远程分支的关联
# git branch --unset-upstream-to=localBranchName
```

3. 修改提交时的备注内容
```bash
# git commit --amend 
```

4. 修改分支名
```bash
# git branch -m <oldBranchName> <newBranchName>
```

5. 撤回提交
```bash 
# 清空工作目录和暂存区，检出某个提交
# git reset --hard <commit>
# 撤回后的差异放入暂存区
# git reset --soft <commit>
# 取消暂存，撤回后的差异放入工作目录
# git reset --mixin <commit>
```

6. 切换到远程分支到本地
```bash
# git checkout -b <remoteName/branchName> <localBranchName>
```
7. 查看配置
```bash
# 查看所有配置，并且显示来源
# git config --list --show-origin
```
8. 修改分支名称
```bash
# 修改本地分支名称
git branch -m oldName newName
# 删除远程分支名称
git push --delete origin oldName
# 本地分支推送到远程
git push origin newName
# 建立本地分支与远程分支关联
git branch --set-upstream-to origin/newName
```
9. 本地分支与远程分支的关联
```bash 
git branch --set-upstream newName origin/newName
git push --set-upstream orgin newName
git branch -vv
git remote show origin
cat .git/config
```

[参考文章](https://www.jianshu.com/p/c2ec5f06cf1a)

