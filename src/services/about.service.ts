import {Injectable} from '@angular/core';

@Injectable()
export class AboutService{
  private info={
    nom:"brahim",
    email:"bb@bb.com",
    tel:56051991
  };
  private comments= [
    {
      date: new Date(),
      message:"A"
    },
    {date:new Date() , message:"B"},
    {date:new Date() , message:"C"}
  ];

  addComment(c: any) {
    c.date = new Date();
    this.comments.push(c);
  }
  getAllComments(){
    return this.comments;
  }
  getInfo(){
    return this.info;
  }

}
