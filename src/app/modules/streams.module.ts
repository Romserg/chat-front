import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { TokenService } from '../services/token.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StreamsComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [StreamsComponent],
  providers: [TokenService]
})
export class StreamsModule { }
