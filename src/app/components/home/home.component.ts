import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  titles = ['Java Full‑Stack Developer', 'Angular • Spring Boot', 'Problem Solver'];
  currentTitle = this.titles[0];
  private idx = 0;
  private timer?: any;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.idx = (this.idx + 1) % this.titles.length;
      this.currentTitle = this.titles[this.idx];
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}