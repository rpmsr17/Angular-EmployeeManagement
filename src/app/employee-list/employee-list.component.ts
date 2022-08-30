import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { doc, deleteDoc,getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  title="Employee List";

  items:any;
  count:number=0;
  nameFilter:string="";
  
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  constructor(private firestore : Firestore, private router:Router,private dataservice:DataServiceService) {
    //console.log(this.nameFilter);
     
  }

  ngOnInit(): void {
    const col = collection(this.firestore,'EmployeesList');
    this.items=collectionData(col);

    this.items.forEach((element: any) => {
      this.count=element.length;
      }); 

  }


  editemp(ev:Event):void{
    const element=ev.target as HTMLButtonElement;
    const value=element.id;
    //console.log(value);

    this.dataservice.setdata(value);

    this.router.navigateByUrl("/EditEmployee");
  
  }

  async delemp(ev:Event):Promise<void>{
    const element=ev.target as HTMLButtonElement;
    const value=element.id;
    //console.log(value);

    await deleteDoc(doc(this.db, "EmployeesList","emp"+value));
  }


  empdetails(ev:Event):void{
    const element=ev.target as HTMLButtonElement;
    const value=element.id;
    //console.log(value);

    this.dataservice.setdata(value);

    //this.router.navigateByUrl("/EmployeeDetails");
  
  }

}