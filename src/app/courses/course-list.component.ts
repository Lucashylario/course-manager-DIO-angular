import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageURL: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,  
                releaseDate: 'November, 2, 2021'                                                     
            },
            {
                id: 1,
                name: 'Angular: HTTP',
                imageURL: '/assets/images/http.png',
                price: 45.99,
                code: 'LKL-1094',
                duration: 88,
                rating: 4,    
                releaseDate: 'December, 2, 2021'                                                   
            }
        ]
    }
}