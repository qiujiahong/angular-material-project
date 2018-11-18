# drop down menu

* 文件material.ts 加入依赖，导入导出 MatMenuModule


```ts
import {MatMenuModule} from '@angular/material/menu';
```


```html
<button mat-icon-button  mat-icon-button [matMenuTriggerFor]="menu">
<mat-icon>menu</mat-icon>
</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>
    <mat-icon>dialpad</mat-icon>
    <span>Redial</span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon>voicemail</mat-icon>
    <span>Check voicemail</span>
  </button>
  <button mat-menu-item>
    <mat-icon>notifications_off</mat-icon>
    <span>Disable alerts</span>
  </button>
</mat-menu>
```

https://material.angular.io/components/menu/overview
