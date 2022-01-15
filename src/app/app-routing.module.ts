import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { WebdevComponent } from './routers/webdev/webdev.component';
import { UiuxComponent } from './routers/uiux/uiux.component';
import { DrawingComponent } from './routers/drawing/drawing.component';
// import { WrongRouteComponent } from './routers/wrong-route/wrong-route.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { WrongRouteComponent } from './routers/wrong-route/wrong-route.component';
const routes: Routes = [
  { path: 'Home', component:MainContentComponent},
  { path: 'Web-development', component: WebdevComponent },
  { path: 'UIUX',component: UiuxComponent },
  { path: 'Drawing', component:DrawingComponent },
  { path: '404', component: WrongRouteComponent},
  { path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
