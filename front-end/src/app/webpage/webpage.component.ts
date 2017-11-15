import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent implements OnInit {
    isCollapsed: boolean = true;

  constructor( private router : Router) { }

 ngOnInit() {
  }

  callsNextPage() {
  	this.router.navigate(['/landing']);
  }

}
