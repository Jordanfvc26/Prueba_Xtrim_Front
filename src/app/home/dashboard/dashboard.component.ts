import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as iconosSolid from '@fortawesome/free-solid-svg-icons';
import * as iconosRegular from '@fortawesome/free-regular-svg-icons';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserInfo } from '../interfaces/user.interface';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  //Variables
  arrayUsers: UserInfo[] = [];
  userToShow: UserInfo = {} as UserInfo;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.getInfoUser();
  }

  //Método que consume el servicio para obtener la información del usuario
  getInfoUser() {
    this.userService.getInfoUser()
      .subscribe({
        next: data => {
          this.arrayUsers = data.usuarios;
          const user = this.arrayUsers.find(user => user.user_name === 'Jordan Vera');
          // Si existe el usuario Jordan Vera (usuario de prueba), lo coloca, sino, coloca el primer usuario del array
          if (user) 
            this.userToShow = user;
          else
          this.userToShow = this.arrayUsers[0];
        },
        error: error => {
          alert("Error al obtener la información del usuario");
        }
      });
  }



  //Icons to Use
  iconArrowRight = iconosSolid.faChevronRight;
  iconCalendar = iconosRegular.faCalendar;
  iconOpenLink = iconosSolid.faUpRightFromSquare;
}
