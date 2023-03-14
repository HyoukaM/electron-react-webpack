### go交叉编译
1.在mac下和Linux下
+ ``CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build`` 打包成linux可运行程序
+ ``CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build`` 打包成windows可运行程序
+ ``CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build`` 打包成mac可运行程序

2.在windows下
+ ``set CGO_ENABLED=0``
+ ``set GOOS=linux``
+ ``set GOARCH=amd64``
+ ``go build``

交叉编译不支持CGO所以都需要关闭