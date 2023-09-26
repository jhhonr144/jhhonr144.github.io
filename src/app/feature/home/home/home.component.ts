import Typed from 'typed.js';
import * as AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private renderer: Renderer2) { 
 
  }

  ngOnInit(): void { 
    
  }


  
}
