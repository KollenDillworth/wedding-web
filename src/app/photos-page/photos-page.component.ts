import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})
export class PhotosPageComponent implements OnInit {


  srcValue: string

  constructor() { }

  ngOnInit() {
  }

  expandImage(divName){
    //debugger;
     //this.srcValue = "/assets/images/natalie.jpg";
this.srcValue = divName;
    var modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption

    modal.style.display = "block";

    // Get the <span> element that closes the modal
    //var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
 
    //modal.style.display = "none";


  }

  closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

}
