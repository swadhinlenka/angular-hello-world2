import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector : 'courses',
    template : `
        {{text | summary : 10}}<br>
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <img [src]="imageUrl" />
        <button class="btn btn-primary" [class.active]="isActive">save</button>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    `
})
export class CoursesCompotent{
    text = "A shorthand property for all the animation properties below, except the animationPlayState property";
    email = "me@example.com";
    title="list of courses";
    imageUrl="https://homepages.cae.wisc.edu/~ece533/images/airplane.png";
    isActive = false;
    courses;
    constructor(service : CoursesService){
        this.courses = service.getCourses();
    }
    onKeyUp(){
        console.log(this.email);
    }
}