import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as iconos from '@fortawesome/free-regular-svg-icons';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NewUserComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {


  constructor(
    // private modal: NgbModal
  ){}


  //Método que abre el modal para registrar un nuevo usuario
  openModalNewUser(registerNewUser: any) {
    //this.modal.open(registerNewUser, { size: 'md', centered: true });
  }

  //Icons to use
  iconNotifications = iconos.faBell;
  iconUser = iconos.faUserCircle;
}
