import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { WebdevComponent } from './routers/webdev/webdev.component';
import { UiuxComponent } from './routers/uiux/uiux.component';
import { DrawingComponent } from './routers/drawing/drawing.component';
import { WrongRouteComponent } from './routers/wrong-route/wrong-route.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    WebdevComponent,
    UiuxComponent,
    DrawingComponent,
    WrongRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
