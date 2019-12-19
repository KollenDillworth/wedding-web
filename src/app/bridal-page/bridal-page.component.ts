import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bridal-page',
  templateUrl: './bridal-page.component.html',
  styleUrls: ['./bridal-page.component.css']
})
export class BridalPageComponent implements OnInit {

  natIndex = 0;
  laurenIndex = 0;
  catIndex = 0;
  kaylaIndex = 0;
  kristenIndex = 0;
  camiIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  onNatInfoClick(index){
    this.natIndex = index;
  }

  onLaurenInfoClick(index){
    this.laurenIndex = index;
  }

  onCatInfoClick(index){
    this.catIndex = index;
  }

  onKaylaInfoClick(index){
    this.kaylaIndex = index;
  }

  onKristenInfoClick(index){
    this.kristenIndex = index;
  }

  onCamiInfoClick(index){
    this.camiIndex = index;
  }

}
