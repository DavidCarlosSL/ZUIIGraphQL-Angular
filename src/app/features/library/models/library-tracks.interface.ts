import { ITrack } from "src/app/shared/models/track.interface";

export interface ILibraryTracks {
    libraryAlbum: {
        libraryTracks: [{trackId: ITrack}]
    }
}