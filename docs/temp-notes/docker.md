# docker
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