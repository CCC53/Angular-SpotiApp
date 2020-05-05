import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBGzzqgB6uqYzdLQh5zL_fW_VxIJErhcNQ2TAWmJuyf2jFuVxZ5cAZ8wh72XUtdgNifAftutOxkqE8toGU'
    });
    return this.http.get(url, {headers});
  }

s
  getnewRealeses() {
    return this.getQuery('browse/new-releases').pipe( map(res => res['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}n&type=artist`).pipe(map(res => res['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=MX`).pipe(map(res => res['tracks']));
  }

}


