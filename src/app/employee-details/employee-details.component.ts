import { Component, OnInit } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Firestore,} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { getFirestore,doc,getDoc } from "firebase/firestore";
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  title="Employee Details";

  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);
  
  id:any;
  empid:string="";
  name:string="";
  location:string="";
  email:string="";
  mobile:string="";

  constructor(private firestore:Firestore, private dataservice:DataServiceService, private router:Router) { 
    
     
  }

  ngOnInit(): void {
    this.id=this.dataservice.getdata();
    this.getdoc();
    
  }


  async getdoc(): Promise<void> {
    
    const docRef = doc(this.db, "EmployeesList", "emp"+this.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.empid= docSnap.data()['empid'];
      this.name=docSnap.data()['name'];
      this.location= docSnap.data()['location'];
      this.email=docSnap.data()['email'];
      this.mobile=docSnap.data()['mobile'];
    } else {
      console.log("No such document!");
    }
  }


  onclickback(): void{
    this.router.navigateByUrl('/EmployeeList')
  }



}