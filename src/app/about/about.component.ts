import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info:any;
  comments=[];
  commantaire={date:null, message:""};
  constructor(private aboutService: AboutService) {
    this.info = this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComments();
  }

  ngOnInit() {
  }

  onAddCommantaire(c){
    this.aboutService.addComment(c);
    this.commantaire={date:null, message:''}
    this.comments = this.aboutService.getAllComments();
  }
}
