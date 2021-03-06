

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";


@Injectable()
export class CoursesService {

    host: string ="http://localhost:3000";

    constructor(private http:HttpClient) {

    }

    findCourseById(courseId: number): Observable<Course> {
        return this.http.get<Course>(`http://localhost:3000/courses/${courseId}`);
    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get('http://localhost:3000/courses')
            .pipe(
                map(res => res['payload'])
            );
    }

    findAllCourseLessons(courseId:number): Observable<Lesson[]> {
        return this.http.get('http://localhost:3000/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('_page', "0")
                .set('_limit', "3")
        }).pipe(
            map(res =>  res["payload"])
        );
    }

    findLessons(
        courseId:number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return this.http.get('http://localhost:3000/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('_page', pageNumber.toString())
                .set('_limit', pageSize.toString())
        }).pipe(
            map(res =>  res["payload"])
        );
    }

}