import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name : string = "John Lester P. Angkil";
  age : number = 20;
  section : string = "IDB3";
  yes : boolean = true;
}
