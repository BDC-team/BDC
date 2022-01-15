import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wrong-route',
  templateUrl: './wrong-route.component.html',
  styleUrls: ['./wrong-route.component.scss']
})

export class WrongRouteComponent{
  constructor(private titleService: Title) {
    this.titleService.setTitle("BDC | Page not found");
 }
}