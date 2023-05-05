import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { DragService } from 'src/app/shared/Services/drag.service';

export interface sidenav {
  name : string;
  url : string;
  icon : string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  clicked = true;
  clr!: string;

  constructor(private mediaObserver: MediaObserver, private dragservice: DragService) {}
  sidenavoptions : sidenav[] = [
    {name : "Table" ,url : "/main/table" ,icon : "table_view"},
    // {name : "Form" ,url : "/main/form" ,icon : "dashboard"},
    // {name : "Dialog" ,url : "/main/dialog" ,icon : "rectangle"},
    // {name : "SnackBar" ,url : "/main/snackbar" ,icon : "dns"},
    {name : "Life-Cycle-Hooks" ,url : "/main/lifecycle" ,icon : "cached" },
    // {name : "Practice" ,url : "/main/parent" ,icon : "pan_tool"},
  ]

  @ViewChild("drawer") drawer !: MatDrawer;
  mode : MatDrawerMode = "side";

  private mediaSubscription!: Subscription;
  private activeMediaQuery = '';
  ngOnInit(changes: SimpleChanges): void {
    this.mediaSubscription = this.mediaObserver
      .asObservable()
      .subscribe((change: any[]) => {
        change.forEach((item) => {
          this.activeMediaQuery = item
            ? `'${item.mqAlias}' = (${item.mediaQuery})`
            : '';
          if (item.mqAlias === 'lt-md') {
            this.drawer.close();
            this.mode = 'over';
          } else if (item.mqAlias === 'md') {
            this.drawer.open();
            this.mode = 'side';
          }
        });
      });
  }
  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
  }

  onTouch() {
    this.clicked = !this.clicked;
    this.dragservice.changeMode(this.clicked);
    if(this.clicked){
      this.clr = 'none';
    } else {
      this.clr = 'accent';
    }
  }
 }
