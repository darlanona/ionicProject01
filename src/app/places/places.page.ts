import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
    places = [
    { id: '1',
      title: 'San Franciso',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Iglesia_de_San_Francisco%2C_Quito%2C_Ecuador%2C_2015-07-22%2C_DD_154.JPG',
      comments: ['asombroso lugar', 'historico']
   },
   { id: '2',
   title: 'Panecillo',
   imageURL: 'https://img.goraymi.com/2017/04/05/b817ccd934683e9672ee4bbdadb0ac7c_xl.jpg',
   comments: ['asombroso lugar', 'historico']
}
  ]
  constructor() { }

  ngOnInit() {
  }

}
