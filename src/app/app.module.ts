import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//Para usar peticiiones http que devuelven un JSON
// contiene unas herramientas o modulos que me peromitiran hacer peticiones HTPP
//La palabra module se asocia con los imports, entonces va en Imports
import{ HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { ArtistComponent } from './component/artist/artist.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';

//Importar rutas
import { ROUTES } from './component/app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
