import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.scss']
})
export class WebdevComponent{
  constructor(private titleService: Title) {
    this.titleService.setTitle("BDC | Web development");
 }
}