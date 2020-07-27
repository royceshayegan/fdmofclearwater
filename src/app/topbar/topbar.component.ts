import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fdm-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openSidebar() {
    document.getElementById("sidebar").classList.toggle("open")
  }

}
