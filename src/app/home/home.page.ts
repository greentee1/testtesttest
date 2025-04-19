import { Component } from '@angular/core';

interface Song{
  name: string
  artist: string
  genre: string
  src: string 

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  my_name: string="Maria!"
  press(){
    this.my_name = this.my_name + "!"
  }
  books: string[] = ['Тайнная история', 'Лавина', 'Норвежский лес']
  songs: Song[] = [ 
    {name: "APT", artist: "Rose", genre: "KPop", src: "/assets/pictures/nw.jpg"},
    {name: "Too Much", artist: "Dove Cameron", genre: "Pop", src: "/assets/pictures/sc.jpg"},
    {name: "POP GIRL", artist: "Lexie Liu", genre: "Pop", src: "/assets/pictures/tsh.jpg"}
  ]

}

