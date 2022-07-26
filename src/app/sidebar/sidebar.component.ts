import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  show:boolean=true
  showon:boolean=false
  shows:boolean=true
  showons:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  toogle(){
    this.show=!this.show
    this.showon=!this.showon
  }
  toogles(){
    this.shows=!this.shows
    this.showons=!this.showons
  }
}
