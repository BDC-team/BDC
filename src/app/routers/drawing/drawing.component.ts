import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})

export class DrawingComponent{
  constructor(private titleService: Title) {
    this.titleService.setTitle("BDC | Drawing");
 }
}