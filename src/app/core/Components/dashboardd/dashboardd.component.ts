import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DragService } from 'src/app/shared/Services/drag.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

interface Comment {
  content: string,
  reply?: Comment[]
}

@Component({
  selector: 'app-dashboardd',
  templateUrl: './dashboardd.component.html',
  styleUrls: ['./dashboardd.component.scss']
})

export class DashboarddComponent {
  v = 0 ;
  value !: string;
  comm !: string;
  results: Comment[] = [];
  currentDateTime: Date = new Date();

  constructor(private dragservice :DragService,private dialog :MatDialog) {}
  @ViewChild('post') post !: TemplateRef<any>;
  drag! : boolean;

  todo = ['time table', 'diary']

  ngOnInit(): void {
    this.dragservice.currentMode.subscribe(res => {
      this.drag = res;
    })
    console.log(this.drag);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
  }
  Oncomment(){
    const dialogRef = this.dialog.open(this.post);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
  OnSubComment(){
      this.results.push({content: this.comm, reply: []})
      this.comm = " ";
  }
  Onupvote(){
    this.v++;
  }
  Ondownvote(){
    this.v--;
  }
}
