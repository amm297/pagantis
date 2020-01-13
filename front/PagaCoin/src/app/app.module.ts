import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {RoutingModule} from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// / required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
               loader: {
                   provide: TranslateLoader,
                   useFactory: HttpLoaderFactory,
                   deps: [HttpClient]
               }
           })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
