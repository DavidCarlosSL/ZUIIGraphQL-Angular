import { Component, OnInit} from '@angular/core';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  public userLibrary;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.getLibrary();
  }

  public getLibrary(){
    this.libraryService.getLibraryAlbums().subscribe((response) => {
      this.userLibrary = response.data.library[0].libraryAlbums;
    }, (error) => console.log(error));
  }
}