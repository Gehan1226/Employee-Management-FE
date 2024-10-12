import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/manager/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manager-layout',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './manager-layout.component.html',
  styleUrl: './manager-layout.component.css'
})
export class ManagerLayoutComponent {

}
