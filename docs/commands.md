# 常用命令

* 新建项目

```angular2html
ng new material-ng --routing --style=scss
```


* 启动服务

```angular2html
ng s --o 
ng s --o --port=10000
```

* 编译工程

```angular2html
ng build 
ng build --prod
```



* 生成控件

```
ng g c home
ng g c courses-card-list
```


* 传入参数   
  * 父亲引用   
  ```html
  <app-courses-card-list [courses]="beginnerCourses">
  ```
  * 儿子注入父亲传入的参数  

  ```js
  @Input()
  courses: Course[];
  ```