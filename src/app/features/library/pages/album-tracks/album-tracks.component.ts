import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbum } from 'src/app/shared/models/album.interface';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-album-tracks',
  templateUrl: './album-tracks.component.html',
  styleUrls: ['./album-tracks.component.css']
})
export class AlbumTracksComponent implements OnInit {

  @Input() album: IAlbum

  public libraryTracks = null;

  constructor(private route: ActivatedRoute, private libraryService: LibraryService) { }

  ngOnInit(): void {
    const libraryAlbumId: number = +this.route.snapshot.paramMap.get('libraryAlbumId');

    this.libraryService.getLibraryAlbumTracks(libraryAlbumId).subscribe((response) => {
      this.libraryTracks = response.data.libraryAlbum.libraryTracks;
      console.log(this.libraryTracks)
    }, (error) => {
      console.log(error)
    })
  }

}