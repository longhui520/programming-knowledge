# 前端学Docker
## Docker 是什么
Docker 是一个开源的应用容器引擎
## Docker 可以做什么
Docker 可以将开发的应用以及依赖包放入到一个轻量级，可移植的容器中，可以快速部署到linux机器上，并且给应用提供一致的运行环境
##  Docker 应用场景
- Web应用的自动打包和发布
- 自动化测试和持续集成，发布
## Docker 起步
- 环境：Cenos 8
- 安装命令
`curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun`
- 启动
`sudo systemctl start docker`
- docker 基本使用
```sh
docker pull ubuntu:13.10 // 从doker 仓库中拉取镜像
docker run -itd ubuntu:13.10 /bin/bash 根据镜像建立容器并运行和进去容器内
docker exec -it [containerid] /bin/bash 进入容器
```
## Docker 概念
- 镜像
- 容器

## docker 基本命令
```shell
docker pull <image>[:<tag>]
docker images [ls]
docker ps [-a]
docker container ls [-a]
docker run [-it] [-d] -p -v
docker exit -it <containerId>/<contianerName> [<app>]
docker container start/stop <containerId>/<contianerName>
docker container rm <containerId>/<contianerName> [-f]
docker image rm -f <imageId><imageName:Tag>
docker image inspect <imageId><imageName:Tag>
docker container inspect <containerId>/<contianerName> 
```
- [参考文章](https://ifish.site/docker_01.html)