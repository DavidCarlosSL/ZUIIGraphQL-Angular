import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { LIBRARY_USER, LIBRARY_TRACKS } from '../graphql/queries/library.queries';

import { IUserLibrary } from '../models/user-library.interface';
import { ILibraryTracks } from '../models/library-tracks.interface';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private apollo: Apollo) { }

  public getLibraryAlbums(){
     return this.apollo.query<IUserLibrary>({
       query: LIBRARY_USER
     })
  }

  public getLibraryAlbumTracks(libraryAlbumId: number) {
    return this.apollo.query<ILibraryTracks>({
      query: LIBRARY_TRACKS,
      variables: {
        libraryAlbumId
      }
    })
  }
}
