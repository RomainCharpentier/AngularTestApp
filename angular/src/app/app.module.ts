import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';

// Firebase services + environment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HighlightDirective } from './highlight/highlight.directive';


const appRoutes: Routes = [
    { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
    { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
    { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'users', component: UserListComponent },
    { path: 'new-user', component: NewUserComponent },
    { path: '', canActivate: [AuthGuard], component: AppareilViewComponent },
    { path: 'not-found', component: FourOhFourComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    declarations: [
        AppComponent,
        AppareilComponent,
        AuthComponent,
        AppareilViewComponent,
        SingleAppareilComponent,
        FourOhFourComponent,
        EditAppareilComponent,
        UserListComponent,
        NewUserComponent,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
    ],
    providers: [
        AppareilService,
        AuthService,
        UserService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
