import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AddTextBlockComponent} from './add-text-block/add-text-block.component';
import {TextBlockContentComponent} from './text-block-content/text-block-content.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppComponent,
    AddTextBlockComponent,
    TextBlockContentComponent
  ],
  providers: []
})
export class AppModule {
}
