# 加入material

* 安装依赖

```angular2html
cnpm i --save @angular/material@7.0.4 @angular/cdk@7.0.4
cnpm i --save @angular/animations@7.0.4
cnpm i --save hammerjs@2.0.8
```

* main.ts中加入hammerjs

```angular2html
import 'hammerjs';
```

* 专门新建一个文件，加入material相关模组``/src/app/material.ts``


```angular2html
import {MatButtonModule, MatCheckboxModule } from '@angular/material';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
})

export class MaterialModule{
}

```

* app.module.ts中加入material.ts

```angular2html
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* 添加style 

```scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```


* index.html的``</head>``前面加入如下行，后续可加入图标

```angular2html
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

* 改前端模版文件app.component.html

```angular2html
<button mat-raised-button>Basic</button>
<button mat-raised-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
<button mat-raised-button color="warn">Warn</button>
<button mat-raised-button disabled>Disabled</button>

<router-outlet></router-outlet>
```



* 打开服务

```angular2html
ng s --o 
```
