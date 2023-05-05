import { Component, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DragService } from 'src/app/shared/Services/drag.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  value !: string;
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  constructor(private breakpointObserver: BreakpointObserver, private dragservice :DragService) {}

  comm!: string;
  rep : string[] = [];
  show = false;
  drag! : string;
  currentDateTime: Date = new Date();
  results: Comment[] = [];

  todo = ['time table', 'diary']

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dragservice.currentMode.subscribe(res => {
      this.drag = res;
    })
    console.log(this.drag);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
  }

  onSubmit() {
    this.results.push({content: this.comm, reply: []})
    this.comm = " ";
  }
  onReplay(i: number) {
    this.results[i].reply?.push({content: this.rep[i] });
    this.rep[i] = " ";
    this.show= false;
  }
  Onshow(){
      if(this.show == false){
        this.show = true;
      }else{
        this.show = false;
      }
     }
}
