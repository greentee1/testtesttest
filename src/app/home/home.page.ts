import { Component } from '@angular/core';

interface Song{
  name: string
  artist: string
  genre: string
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
  books: string[] = ['Таинственная история', 'Лавина', 'Норвежский лес']
  songs: Song[] = [ 
    {name: "APT", artist: "Rose", genre: "KPop"},
    {name: "Too Much", artist: "Dove Cameron", genre: "Pop"},
    {name: "POP GIRL", artist: "Lexie Liu", genre: "Pop"}
  ]

}

