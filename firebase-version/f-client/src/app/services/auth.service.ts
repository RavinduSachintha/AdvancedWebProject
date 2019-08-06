import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

  loginWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
