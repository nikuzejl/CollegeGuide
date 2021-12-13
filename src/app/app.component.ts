import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnalyticsService } from './analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CollegeGuide';
  
  constructor (
    private readonly analyticsService: AnalyticsService,
    private readonly router: Router,
  ) { }
  
  ngOnInit() {
    this.analyticsService.init();
  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (window as any).ga('set', 'page', event.urlAfterRedirects);
        (window as any).ga('send', 'pageview');
      }
    });
  }
}
