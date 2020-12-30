# git
## 初始化
- 克隆远程仓库
```shell
git clone  <地址>
```
- 新建本地仓库
```shell
git init 
```
## 撤销
- 未使用git add 暂存代码，放弃工作目录中的修改
```shell
git checkout -- filename   //放弃单个文件的修改
git checkout -- .          //放弃所有文件的修改 
```
- 已使用git add 暂存代码 ，放弃暂存中的修改
```shell
git reset HEAD [.|filename] //放弃暂存区域的内容
git reset --hard HEAD       //放弃暂存区域和工作目录的内容
git reset --soft commits    //head移动到某个提交，将变更放入暂存区，提交后起到合并分支目的
```
- 已使用 git commit 提交代码 ··
```shell
git reset --hard HEAD^      // 放弃本次提交
```
- 版本反做（删除某个版本，并且不影响后续版本提交的内容）
``` shell
git revert -n commits
```
- [参考文章](https://blog.csdn.net/asoar/article/details/84111841)
## 追加修改内容到上次提交
  - git commit  --amend --no-edit //追加到上次提交 