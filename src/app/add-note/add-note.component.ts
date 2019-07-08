import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteService} from '../services/note-service.service';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(public note: MatDialog, private fb: FormBuilder, private dialogRef: MatDialogRef<AddNoteComponent>, private noteService: NoteService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  dialogResult: string;
  isAvailable: false;
  public addNoteForm: FormGroup;
  ngOnInit() {
    this.addNoteForm = this.fb.group({
      title:[this.data.title],
      textarea: [this.data.textarea],
      ID: [this.data.ID]
    })
  }
  addNote(){
    let dialogRef = this.note.open(AddNoteComponent,{
      width: '600px',
      data: 'This is a note'

    });
    dialogRef.afterClosed().subscribe(result =>{
  
    })
  }
  deleteMe(id: number){
    this.noteService.deleteNote(id)
    this.dialogRef.close();

  }
 
  onSubmit() {
    if(this.data.ID){
      
      this.noteService.editNote(this.addNoteForm.value)
      console.log(this.addNoteForm.value.ID);
      this.dialogRef.close();
    }
    else{
      
      this.noteService.addToNote(this.addNoteForm.value)
      console.log(this.addNoteForm.value);
     this.dialogRef.close();

    }
  
  }

}
