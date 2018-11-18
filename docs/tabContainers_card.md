# Tab Containers &  Card

* 生成一个新组建``ng g c courses-card-list``,用card显示课程列表

* 修改文件material.ts，添加MatTabsModule

* 修改home.component.html , 使用mat-tab-group组件，并把courses传递给子组建；

```html
<div class="courses-panel">
  <h3>All Courses</h3>
  <mat-tab-group>
    <mat-tab label="Beginners">
      <app-courses-card-list
       [courses]="beginnerCourses">
      </app-courses-card-list>
    </mat-tab>

    <mat-tab label="Advanced">
      <app-courses-card-list
      [courses]="advancedCourses">
      </app-courses-card-list>
    </mat-tab>
  </mat-tab-group>
</div>
```

* 子组建声明输入变量courses-card-list.component.ts

```
  @Input()
  courses: Course[];
```


## 修改子组件courses-card-list.component

* courses-card-list.component.ts添加注入把变量  

```ts

import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: Course[];

  constructor() { }

  ngOnInit() {
  }

}

```

* courses-card-list.component.html

```html
<mat-card *ngFor="let course of courses" 
  class="course-card mat-elevation-z10">
  <mat-card-header>
    <mat-card-title>{{course.description}}</mat-card-title>
  </mat-card-header>
  <img mat-card-image [src]="course.iconUrl">
  <mat-card-content>
    <p>{{course.longDescription}}</p>
  </mat-card-content>
  <mat-card-actions class="course-actions">
    <button mat-button class="mat-raised-button mat-primary">
      View Course
    </button>
  </mat-card-actions>
</mat-card>
```

* 添加样式

```css
.course-card{
  margin: 20px 10px;
}

.course-actions{
  text-align: center;
}
```
