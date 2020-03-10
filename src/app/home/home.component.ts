import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    var countDownDate = new Date("Nov 7, 2020 17:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("demo").innerHTML ="See you in " + days + " days!";
    var x = setInterval(function(){
      now = new Date().getTime();
      distance = countDownDate - now;

      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      document.getElementById("demo").innerHTML ="See you in " + days + " days!";

      // if (distance < 0) {
      //   clearInterval(x);
      //   document.getElementById("demo").innerHTML = "EXPIRED";
      // }
    },60000);
  }

}
