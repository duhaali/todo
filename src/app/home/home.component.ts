import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listNum :number
  submText :string ="Add"
  editInputText : string;
  mylist=[];
  constructor() { }

  ngOnInit() {
    
  }
  addItem(){
      this.mylist.push(this.editInputText)
      this.editInputText =""
      this.listNum =this.mylist.length;
  }

}
