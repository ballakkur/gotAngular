import { Component, OnInit } from '@angular/core';
//this is for routing
import { ActivatedRoute, Router } from "@angular/router";
//used here for goback button
import { Location } from '@angular/common'
import { HttpServiceService } from '../../http-service.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[Location]
})
export class BooksComponent implements OnInit {
  public gotData;
   private id = this._route.snapshot.paramMap.get('url');
  constructor(private _route:ActivatedRoute, private router:Router,private location:Location,private httpservice:HttpServiceService)
   {
    
   }

  ngOnInit() {
    console.log(this._route.snapshot.paramMap.get('url'));
  
    // let isbn = this._route.snapshot.paramMap.get('isbn');
    this.httpservice.getDataOfId(this.id).subscribe(
      data =>
      {
        console.log("data not observable");
        console.log(data);
        this.gotData = data;
        return this.gotData;
      },
      error=>
      {
        console.log("some error occured")
        console.log(error.errorMessage)
        
      }
    );
  }
/*   getindex =()=>
  {
    console.log(JSON.parse(this.isbn));    
  } */
getback():any
{
  this.location.back();
}
  
 /*  data =[  
    {  
       "url":"https://www.anapioficeandfire.com/api/books/1",
       "name":"A Game of Thrones",
       "isbn":"978-0553103540",
       "authors":[  
          "George R. R. Martin"
       ],
       "numberOfPages":694,
       "publisher":"Bantam Books",
       "country":"United States",
       "mediaType":"Hardcover",
       "released":"1996-08-01T00:00:00",
       "characters":[  
          "https://www.anapioficeandfire.com/api/characters/2",
          "https://www.anapioficeandfire.com/api/characters/12",
          "https://www.anapioficeandfire.com/api/characters/13",
          "https://www.anapioficeandfire.com/api/characters/16",
          "https://www.anapioficeandfire.com/api/characters/20",
          "https://www.anapioficeandfire.com/api/characters/27",
          "https://www.anapioficeandfire.com/api/characters/31"
       ],
       "povCharacters":[  
          "https://www.anapioficeandfire.com/api/characters/148",
          "https://www.anapioficeandfire.com/api/characters/208",
          "https://www.anapioficeandfire.com/api/characters/232",
          "https://www.anapioficeandfire.com/api/characters/339"
       ]
    },
    {  
       "url":"https://www.anapioficeandfire.com/api/books/2",
       "name":"A Clash of Kings",
       "isbn":"978-0553108033",
       "authors":[  
          "George R. R. Martin"
       ],
       "numberOfPages":768,
       "publisher":"Bantam Books",
       "country":"United States",
       "mediaType":"Hardback",
       "released":"1999-02-02T00:00:00",
       "characters":[  
          "https://www.anapioficeandfire.com/api/characters/2",
          "https://www.anapioficeandfire.com/api/characters/12",
          "https://www.anapioficeandfire.com/api/characters/13",
          "https://www.anapioficeandfire.com/api/characters/16",
          "https://www.anapioficeandfire.com/api/characters/20"
   ],
       "povCharacters":[  
          "https://www.anapioficeandfire.com/api/characters/148",
          "https://www.anapioficeandfire.com/api/characters/208",
          "https://www.anapioficeandfire.com/api/characters/232",
          "https://www.anapioficeandfire.com/api/characters/583"
  
   ]
    },
    {  
       "url":"https://www.anapioficeandfire.com/api/books/3",
       "name":"A Storm of Swords",
       "isbn":"978-0553106633",
       "authors":[  
          "George R. R. Martin"
       ],
       "numberOfPages":992,
       "publisher":"Bantam Books",
       "country":"United States",
       "mediaType":"Hardcover",
       "released":"2000-10-31T00:00:00",
       "characters":[  
          "https://www.anapioficeandfire.com/api/characters/2",
          "https://www.anapioficeandfire.com/api/characters/3",
          "https://www.anapioficeandfire.com/api/characters/7",
  
  ],
       "povCharacters":[  
          "https://www.anapioficeandfire.com/api/characters/148",
          "https://www.anapioficeandfire.com/api/characters/208",
          "https://www.anapioficeandfire.com/api/characters/232",
          "https://www.anapioficeandfire.com/api/characters/529"
  ]
  }
  ] */
 
}
