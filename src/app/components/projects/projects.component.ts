import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Student Management System',
      description: 'A Spring Boot + Angular project to manage students with CRUD operations.',
      image: 'assets/images/student-management.jpg',
      link: 'https://github.com/yourusername/student-management'
    },
    {
      title: 'Mock Scheduling Website',
      description: 'A web app to schedule and send email notifications before mock interviews.',
      image: 'assets/images/mock-scheduler.jpg',
      link: 'https://github.com/yourusername/mock-scheduler'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with Angular and Bootstrap.',
      image: 'assets/images/portfolio.jpg',
      link: 'https://yourportfolio.com'
    }
  ];
}
