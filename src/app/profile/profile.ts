import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name : string = "John Lester P. Angkil";
  email : string = "20242643@s.ubaguio.edu";
  age : number = 20;
  location : string = "Camp 7, Baguio City"
  bio : string = "I like videogames"
}
