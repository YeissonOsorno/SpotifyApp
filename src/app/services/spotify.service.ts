import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }
  getNewReleases()
  {

    //uso este código para poder usar los headers
    const headers = new HttpHeaders({
      //aqui especifico todos los headers que la peticion de Spotify necesita
      // los : es porque estoy dentro de un objeto
      'Authorization': 'Bearer BQCATCDIXelhRtJUhRa5li2_pedYXopRIlIkyV777Cs9vWytujX878u4HOSl4BO_FyFaFZMHD0ffoErV14q8ygxFhO7vp29TD9tjxMNyqQdH83bpnfS2XIk1Mlmn1USSSkqCRXg2ams'
    })
    //preparo la peticion http con la URl de spotify
    return this.http.get('	https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  
  getArtist(termino:string)
  {
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCATCDIXelhRtJUhRa5li2_pedYXopRIlIkyV777Cs9vWytujX878u4HOSl4BO_FyFaFZMHD0ffoErV14q8ygxFhO7vp29TD9tjxMNyqQdH83bpnfS2XIk1Mlmn1USSSkqCRXg2ams'
    }) 
    
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
  }
}
