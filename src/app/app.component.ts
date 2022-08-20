import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  displayVal : string ='';
  show=false;
  color="blue";
  colorOne='green'
  bgClor='orange'
  user=["tawhid","sajib","kalam","raz"];

  userDetails=[
    {name:'Tawhid' ,email:'islam@gmail.com',phone:'018712843'},
    {name:'sajib' ,email:'islam@gmail.com',phone:'018712843'},
    {name:'kalam' ,email:'islam@gmail.com',phone:'018712843'},
    {name:'raz' ,email:'islam@gmail.com',phone:'018712843'}

  ];

  employDetails=[
    {name:'Tawhid' ,email:'islam@gmail.com',phone:'018712843',accounts :['facebook','tawiter','whatsApp']},
    {name:'sajib' ,email:'islam@gmail.com',phone:'018712843',accounts :['linked','viber','whatsApp']},
    {name:'kalam' ,email:'islam@gmail.com',phone:'018712843',accounts :['facebook','tiktalk','whatsApp']},
    {name:'raz' ,email:'islam@gmail.com',phone:'018712843',accounts :['facebook','youtube','whatsApp']}

  ];

  getData(val:string){
    console.log(val)
    this.displayVal= val;
  }

  count =0;
  getcount(type :string){
    type ==='add'? this.count++:this.count--
  }

  changeColor(){
    this.colorOne="blue"
    this.bgClor="red"
  }

 
}
