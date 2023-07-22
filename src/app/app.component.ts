import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personal-website';

  constructor(private readonly _responsive: BreakpointObserver) {}

  ngOnInit() {
    this._responsive.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
      if (result.matches) {
        console.log('Change Header and Footer');
      } else {
        console.log('Desktop');
      }
    });
  }
}
