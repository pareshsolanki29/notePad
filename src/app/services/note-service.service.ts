import { Injectable } from '@angular/core';
import { Note} from '../models/note';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
   notes: Note[] = [];

  constructor() { }

  addToNote(note: Note){
    note.ID = this.notes.length +1;
    this.notes.push(note);
  }

  editNote(note: Note) {
     for(let i in this.notes){
       if(note.ID ===this.notes[i].ID){
         this.notes[i].title = note.title
         this.notes[i].textarea = note.textarea;
       }
       
     }

  }

  deleteNote(id: number) {
    const contact = this.notes.findIndex(c => c.ID === id);
    this.notes.splice(contact, 1);
  }
  getAllNotes(){
    return this.notes
  }
}
