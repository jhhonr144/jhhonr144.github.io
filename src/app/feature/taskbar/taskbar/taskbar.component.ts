import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {
  mostrarAppMenu = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  toggleAppMenu() {
    this.mostrarAppMenu = !this.mostrarAppMenu;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.mostrarAppMenu) {
      // Verificar si el clic ocurrió fuera del elemento #start
      const startButton = document.getElementById('startbutton');
      if (startButton && !startButton.contains(event.target as Node)) {
        this.renderer.removeClass(startButton, 'startclicked');
        this.mostrarAppMenu = false;
      }
    }
  }

}
