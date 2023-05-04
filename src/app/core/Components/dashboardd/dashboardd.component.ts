import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  comm!: string;
  rep : string[] = [];
  show = false;
  currentDateTime: Date = new Date();
  results: Comment[] = [];

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
