import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { FakeMainPage } from './pages/fake-main-page/fake-main-page';
import { MainPage } from './pages/main-page/main-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
    { path: '', component: Layout, children:
        [
            { path: '', component: FakeMainPage },
            { path: 'main', component: MainPage }
        ]
    },
    { path: 'register', component: RegisterPage },
    { path: 'login', component: LoginPage }
];
