import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoAppComponent } from "./MyComponents/to-do-app/to-do-app.component";
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule} from '@angular/forms';







@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ToDoAppComponent, CommonModule, NgFor, FormsModule]
})


export class AppComponent {
  Heading = 'AngularApp1';
  constructor(){
    setTimeout(() => {
      this.Heading = "NewANgular APP"
      
    }, 5000);
  }
}
