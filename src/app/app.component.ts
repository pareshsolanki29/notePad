import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material'
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteService } from './services/note-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'notePad';
  constructor(public note: MatDialog, public noteService: NoteService, ) { }
  dialogResult: string;

  ngOnInit() {}
  
  //adding notes 
  addNote(){
    let dialogRef = this.note.open(AddNoteComponent,{
      width: '600px',
      data: 'This is a note'

    });
    dialogRef.afterClosed().subscribe(result =>{
    
      this.dialogResult = result;
    })
  }

//editing note
  editNote(id: number){
    const notes = this.noteService.getAllNotes().find(c => c.ID === id);
    const dialogRef = this.note.open(AddNoteComponent, {
      
      data: notes
  })}
  get AllNotes(){
    return this.noteService.getAllNotes()
  }

  //deleting notes
  deleteMe(id: number){
    this.noteService.deleteNote(id)

  }
}
