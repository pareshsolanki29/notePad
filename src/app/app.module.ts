import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatDialogModule, MatInputModule,MatIconModule} from '@angular/material';
import { AddNoteComponent } from './add-note/add-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule, MatCardModule, MatFormFieldModule,MatDialogModule,MatInputModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents:[AddNoteComponent],
})
export class AppModule { }
