import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos:any;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSearch(dataForm) {
    this.http.get("https://pixabay.com/api/?key=7633290-b8017738f6c5116ee802e857c&q="
      +dataForm.keyword+"&per_page=9&page=1").map(resp=>resp.json()).subscribe(data=>{
        this.pagePhotos=data;
    });
  }
}
