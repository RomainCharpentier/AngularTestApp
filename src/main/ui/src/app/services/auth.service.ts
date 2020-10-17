import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isAuth = false;
    userData: any; // Save logged in user data

    constructor(
        public afs: AngularFirestore,   // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,
        public ngZone: NgZone // NgZone service to remove outside scope warning
      ) {
        /* Saving user data in localstorage when 
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                //JSON.parse(localStorage.getItem('user'));
            } else {
                localStorage.setItem('user', null);
                //JSON.parse(localStorage.getItem('user'));
            }
        });
    }

    signIn(email: string, password: string) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then(
                (result) => {
                    this.ngZone.run(() => {
                        this.router.navigate(['dashboard']);
                    });
                    //this.SetUserData(result.user);
                    this.isAuth = true;
                    console.log(result);
                })
            .catch((error) => {
                window.alert(error.message);
        });
    }

    signOut() {
        this.isAuth = false;
    }
}
