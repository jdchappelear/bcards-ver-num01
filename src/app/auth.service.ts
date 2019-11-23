import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        )
                }
            )
            .catch(
                error => console.log(error)
            );
        if (this.token != null) {

        }
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/signin']);
        console.log("Logged out");
        console.log(this.token);
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    loggedIn = false;

/*    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)
                }, 800);
            }
        );
        return promise;
    }  */


    login() {
        this.loggedIn = true;
    }

 /*   logout() {
        this.loggedIn = false;
    }
*/
}