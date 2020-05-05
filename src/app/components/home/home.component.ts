import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevaMusica:any[] = [];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getnewRealeses().subscribe(res => {
      this.nuevaMusica = res
      this.loading = false;
    }, error => {
      this.loading = false;
      this.error = true;
      this.mensajeError = error.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
