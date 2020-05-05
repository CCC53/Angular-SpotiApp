import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  loading:boolean;
  toptracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getArtista(id:string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(res => {
      this.artista = res;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(res => {
      this.toptracks = res;
    });
  }

}
