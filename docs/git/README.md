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
# git branch --set-upstream-to=<remoteName/branchName localBranchName>
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
[参考文章](https://www.jianshu.com/p/c2ec5f06cf1a)