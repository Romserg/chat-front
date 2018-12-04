import { AuthTabsComponent } from '../components/auth-tabs/auth-tabs.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';


@NgModule({
  declarations: [AuthTabsComponent, LoginComponent, SignupComponent],
  imports: [SharedModule],
  exports: [AuthTabsComponent, LoginComponent, SignupComponent]
})
export class AuthModule { }
