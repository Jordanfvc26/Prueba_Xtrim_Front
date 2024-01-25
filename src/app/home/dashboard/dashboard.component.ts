import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserInfo } from '../interfaces/user.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as iconosSolid from '@fortawesome/free-solid-svg-icons';
import * as iconosRegular from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
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
  searchForm!: FormGroup;

  //Constructor
  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) { }

  //ngOnInit()
  ngOnInit() {
    this.createSearchForm();
    this.getInfoUser();
  }

  //Método crea el formulario de buscar usuario por número de cuenta
  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      account_number: ['',
        [
          Validators.required
        ],
      ],
    })
  }

  //Método que consume el servicio para obtener un listado de usuario y mostrar a Jordan Vera por defecto
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

  //Método que busca un usuario por número de cuenta y lo muestra
  getUserByAccountNumber(){
    this.userService.getUserByAccountNumber(this.searchForm.value.account_number).subscribe({
      next: data => {
        this.userToShow = data.usuario;
        alert("Usuario encontrado con éxito")
      },
      error: error => {
        alert("Error al obtener la información del usuario");
      }
    })
  }

  //Icons to Use
  iconArrowRight = iconosSolid.faChevronRight;
  iconCalendar = iconosRegular.faCalendar;
  iconOpenLink = iconosSolid.faUpRightFromSquare;
  iconSearch = iconosSolid.faSearch;
}
