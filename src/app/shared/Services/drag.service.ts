import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragService {
  private dragSource = new BehaviorSubject<string>("");
  currentMode = this.dragSource.asObservable();

  constructor() { }

  changeMode(message: string) {
    this.dragSource.next(message)
  }
}
