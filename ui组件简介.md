# 组件库介绍
## demo

是一个vue项目，引用package下源文件

## doc

1 docute
2 docsify
3 gitbook
4 hexo

**docute**


## 构建

build/bin/build-entry.js  

    1 动态生成 indx.js     
    2 components.json组件列表

build/bin/gen-cssfile.js  

    1 动态生成 indx.scss   
    2  创建遗漏的css  
    3 组件文件夹名称 需要与css文件名称一致

## 几个脚本

	见package.json


# 写一个组件 &规范

组件名称在组建内部，

	以大写【VU】开头， 
    
	class类名以小写【vu- 】开头 
    
	内部css以长下划线链接
    
	需要外部修改的以两条中划线链接
    

创建scss文件 include b e m

在component.json 声明

## scss编译

	by gulp
	
## 单元测试

	mocha 
	karma 
	sinon
	chai
	avoriaz -->for vue test
	



