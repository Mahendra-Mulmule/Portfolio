import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Samstrack – Student Management System',
      description: 'A full-stack web application that allows students to view their academic reports and overall information, while administrators can manage student records including adding, updating, and deleting details. Built with Java, Angular, and MySQL.',
    
      link: 'https://github.com/Mahendra-Mulmule/Samstrack'
    },
    {
      title: 'Mock Preparation Platform',
      description: 'A backend project that enables users to practice mock interview questions and receive automated feedback. Designed with a focus on backend logic and data handling using Java and MySQL.',

      link: 'https://github.com/Mahendra-Mulmule/Springboot-MockPre'
    },
    {
      title: 'Library Management System',
      description: 'A BCA academic project developed using JavaScript that manages books, students, and borrowing records. It provides basic CRUD functionality and helps in maintaining library operations efficiently.',
    
      link: 'https://github.com/yourusername/library-management'
    }
  ];
}
