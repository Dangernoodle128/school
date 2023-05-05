import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragService {
  private dragSource = new BehaviorSubject<boolean>(true);
  currentMode = this.dragSource.asObservable();

  constructor() { }

  changeMode(message: boolean) {
    this.dragSource.next(message)
  }
}
