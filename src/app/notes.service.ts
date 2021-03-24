import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Note } from "./note";

@Injectable()
export class NotesService {
  serverUrl = "http://localhost:3000/notes";

  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<Array<Note>> {
    return this.httpClient.get<Array<Note>>(this.serverUrl);
  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.serverUrl, note);
  }
}
