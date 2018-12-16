import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { TokenService } from '../services/token.service';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
  declarations: [StreamsComponent, ToolbarComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [StreamsComponent, ToolbarComponent],
  providers: [TokenService]
})
export class StreamsModule {
}
