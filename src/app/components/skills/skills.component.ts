import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Java', level: 'Advanced', percentage: 85, icon: 'fab fa-java' },
    { name: 'Spring Boot', level: 'Intermediate', percentage: 75, icon: 'fas fa-leaf' },
    { name: 'Hibernate', level: 'Intermediate', percentage: 70, icon: 'fas fa-database' },
    { name: 'Angular', level: 'Advanced', percentage: 80, icon: 'fab fa-angular' },
    { name: 'MySQL', level: 'Advanced', percentage: 85, icon: 'fas fa-database' },
    { name: 'HTML, CSS, JS', level: 'Advanced', percentage: 90, icon: 'fab fa-html5' }
  ];
}
