import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course:Course;
  dataSource = new MatTableDataSource([]);
  displayedColumns = ["seqNo","description","duration"];

  constructor(private route: ActivatedRoute,
          private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];

    console.log("try to find all lessons : " + this.course.id)
    this.coursesService.findAllCourseLessons(this.course.id)
    .subscribe(lessons => 
      {
        this.dataSource.data = lessons ;
        console.log("get lessons:"+JSON.stringify(lessons) );
      })


  }

}
