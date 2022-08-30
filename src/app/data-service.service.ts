import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  id:any;

  constructor() { }
  

  setdata(id:any){
    this.id=id;
    //console.log(this.id);
  }

  getdata(){
    return this.id;
  }
}
