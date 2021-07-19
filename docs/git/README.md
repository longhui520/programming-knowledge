# git
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
[参考文章](https://www.jianshu.com/p/c2ec5f06cf1a)