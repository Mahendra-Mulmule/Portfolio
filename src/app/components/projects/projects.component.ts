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
      description: [
        'Full-stack web application for managing student academic records.',
        'Students can view reports and overall information.',
        'Admins can add, update, and delete student details.',
        'Built with Java, Angular, and MySQL.'
      ],
      link: 'https://github.com/Mahendra-Mulmule/Samstrack'
    },
    {
      title: 'Mock Preparation Platform',
      description: [
        'Backend project for practicing mock interview questions.',
        'Provides automated feedback after practice sessions.',
        'Focus on backend logic and data handling.',
        'Developed using Java and MySQL.'
      ],
      link: 'https://github.com/Mahendra-Mulmule/Springboot-MockPre'
    },
    {
      title: 'Library Management System',
      description: [
        'BCA academic project for managing books and borrowing records.',
        'Handles CRUD operations for books and students.',
        'Helps maintain library operations efficiently.',
        'Developed using JavaScript.'
      ],
      link: 'https://github.com/yourusername/library-management'
    }
  ];
}
