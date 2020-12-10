# docer redis 配置
1. 拉取镜像
```shell
docker pull redis
```
2. 新建挂载配置文件
```shell
mkdir -p /root/docker/redis/data
mkdir -p /root/docker/redis/conf
```
3. 在配置目录中新建配置文件
```txt
#bind 127.0.0.1 //允许远程连接
protected-mode no 
appendonly yes
requirepass lh123456
```
4. 创建redis容器并启动
```shell
 docker run --name reids-demo -p 6380:6379 -v /root/docker/redis/data:/data -v /root/docker/redis/conf/redis.conf:/etc/redis/redis.conf -d redis redis-server 
```
--name:设置容器名
-p:设置宿主机与容器的端口映射
-v:设置宿主机目录和容器目路的映射
-d:后台运行
5. 检查是否启动成功
```shell
docker ps    //已启动的容器
docker ps -a //全部容器
```