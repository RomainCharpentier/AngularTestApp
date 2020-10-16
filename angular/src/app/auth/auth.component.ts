import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    authStatus: boolean;
    userForm: FormGroup;

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.authStatus = this.authService.isAuth;
        this.userForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    onSignIn() {
        const formValue = this.userForm.value;
        this.authService.signIn(formValue['email'], formValue['password']).then(
            () => {
                console.log('Sign in successful!');
                this.authStatus = this.authService.isAuth;
                this.router.navigate(['appareils']);
                localStorage.setItem('token', 'TODO');
            }
        );
    }

    onSignOut() {
        this.authService.signOut();
        this.authStatus = this.authService.isAuth;
    }

}