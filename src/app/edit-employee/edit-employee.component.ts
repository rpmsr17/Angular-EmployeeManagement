import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc,collection,setDoc,doc } from "firebase/firestore";
import { environment } from 'src/environments/environment';
import { Firestore,collectionData } from '@angular/fire/firestore';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit, AfterViewInit {

  title="Edit Employee";

  formdata:any;
  name:string="";
  location:string="";
  email:string="";
  mobile:string="";
  empid:any;

  items:any;
  //count:number=0;

  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

 
  constructor(private router:Router,firestore : Firestore, private dataservice:DataServiceService) { 
    //const col = collection(firestore,'EmployeesList');
    //this.items=collectionData(col);

    //this.items.forEach((element: any) => {
      //this.count=element.length;
      //});

  }
  
  
  ngOnInit(): void {
    this.formdata=new FormGroup({
      name : new FormControl('',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z][a-zA-Z ]+")])),
      location : new FormControl('',Validators.required),
      email : new FormControl('',Validators.compose([Validators.required,Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")])),
      mobile : new FormControl('',Validators.compose([Validators.required,Validators.pattern("^\\d{10}$")]))

    })

  }


  @ViewChild('name')inputname!:ElementRef<HTMLInputElement>;
  ngAfterViewInit(): void { this.inputname.nativeElement.focus(); }


  async onclickSubmit(data: any){
    this.name= data.name;
    this.location=data.location;
    this.email=data.email;
    this.mobile=data.mobile;
    
    try{
      //this.count=this.count+1;
      this.empid=this.dataservice.getdata()
      console.log(this.empid);


      await setDoc(doc(this.db, "EmployeesList", "emp"+this.empid), {
        empid:this.empid,
        name:this.name,
        location:this.location,
        email:this.email,
        mobile:this.mobile,
      });

    }catch(e){
      console.error("Error adding document: ", e);
    }

    
    this.router.navigateByUrl("/EmployeeList");
    
  }


}
