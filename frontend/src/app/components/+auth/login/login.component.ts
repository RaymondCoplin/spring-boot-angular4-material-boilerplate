import { AuthService } from '../../../security/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [':host { height: 100%; margin: 0px 15px !important; justify-content: center; align-items: center; }'],
  
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
  }

  login(event, username, password){
    this.authService
        .signIn(username, password)
        .subscribe(
          data => {
            this.router.navigate(['/']);
            this.snackBar.open("Sesión iniciada", "Iniciar Sesión", {
              duration: 2000,
              horizontalPosition: "right"
            });
          },
          err => {
            if(err.status === 401){
              this.snackBar.open("Contraseña Incorrecta", "Iniciar Sesión", {
                duration: 2000,
                horizontalPosition: "right"
              });
            }
            else if(err.status === 404){
              this.snackBar.open("El usuario no existe", "Iniciar Sesión", {
                duration: 2000,
                horizontalPosition: "right"
              });
            }
          }
        )
  }

}
