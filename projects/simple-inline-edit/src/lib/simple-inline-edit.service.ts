import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SimpleInlineEditService {

  private closeEditSubject: Subject<boolean>;
  public closeEdit$: Observable<boolean>; 
  constructor() { 
    this.closeEditSubject = new Subject();
    this.closeEdit$ = this.closeEditSubject.asObservable();
  }

  setEditStatus(doClose:boolean) {
    this.closeEditSubject.next(doClose);
    
  }

  getInlineEditStatus() {
    
  }
}