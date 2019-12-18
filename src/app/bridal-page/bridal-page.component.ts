import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bridal-page',
  templateUrl: './bridal-page.component.html',
  styleUrls: ['./bridal-page.component.css']
})
export class BridalPageComponent implements OnInit {

  tabIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  onTabClick(index){
    this.tabIndex = index;
  }

}
