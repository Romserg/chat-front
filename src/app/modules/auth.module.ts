import { AuthTabsComponent } from '../components/auth-tabs/auth-tabs.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AuthTabsComponent],
  imports: [SharedModule],
  exports: [AuthTabsComponent]
})
export class AuthModule { }
