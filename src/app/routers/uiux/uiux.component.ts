import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-uiux',
  templateUrl: './uiux.component.html',
  styleUrls: ['./uiux.component.scss']
})
export class UiuxComponent{
  constructor(private titleService: Title) {
    this.titleService.setTitle("BDC | UI & UX design");
 }
}