import { gql } from "apollo-angular";

export const LIBRARY_USER = gql`
  query library {
    library {
      libraryAlbums {
        id_library_album
        albumId {
            name_album
            image_album
        }
      }
    }
  }
`

export const LIBRARY_TRACKS = gql`
  query libraryAlbum($libraryAlbumId: Float!) {
    libraryAlbum(libraryAlbumId: $libraryAlbumId) {
      libraryTracks {
        trackId {
          name_track
          duration_ms
        }
      }
    }
  }
`