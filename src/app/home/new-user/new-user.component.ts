import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiResponseRegisterUser, UserInfo } from '../interfaces/user.interface';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  //Variables
  registerForm!: FormGroup;

  //Constructor
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  //ngOnInit()
  ngOnInit() {
    this.createRegisterForm();
  }

  //Método que crea el formulario de registro de usuario
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      account_number: ['',
        [
          Validators.required,
          Validators.maxLength(10)
        ],
      ],
      user_name: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50)
        ],
      ],
      province: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(40)
        ],
      ],
      city: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(40)
        ],
      ],
      parish: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(40)
        ],
      ],
      balance: ['',
        [
          Validators.required,
        ],
      ],
    });
  }

  //Método que consume el servicio para registrar el usuario
  registerNewUser() {
    let body: UserInfo = {
      account_number: this.registerForm.value.account_number,
      user_name: this.registerForm.value.user_name,
      province: this.registerForm.value.province,
      city: this.registerForm.value.city,
      parish: this.registerForm.value.parish,
      balance: this.registerForm.value.balance,
    }
    this.usersService.registerNewUser(body)
      .subscribe({
        next: (data: ApiResponseRegisterUser) => {
          alert(data.mensaje);
          this.registerForm.reset();
        },
        error: error => {
          alert("Error al registrar el usuario");
        }
      });
  }
}
