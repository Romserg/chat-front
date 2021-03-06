import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { TokenService } from '../services/token.service';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { SideComponent } from '../components/side/side.component';
import { PostFormComponent } from '../components/post-form/post-form.component';
import { PostsComponent } from '../components/posts/posts.component';
import { MaterialFileUploadComponent } from '../components/material-file-upload/material-file-upload.component';

@NgModule({
  declarations: [StreamsComponent, ToolbarComponent, SideComponent, PostFormComponent, PostsComponent, MaterialFileUploadComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [StreamsComponent, ToolbarComponent],
  providers: [TokenService]
})
export class StreamsModule {
}
