import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimeTrackerComponent } from '../../timetracker/timetracker.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mobileQuery: MediaQueryList;
  
  menuNav = [
    { title: 'Home', url: '.', icon: 'home'},
    { title: 'Time Tracker Settings', url: '.', icon: 'query_builder'},
    { title: 'Vacations/Leaves', url: '.', icon: 'surfing'},
    { title: 'Rewards and Recognition', url: '.', icon: 'emoji_events'},
    { title: 'Referral Program', url: '.', icon: 'person_add'},
    { title: 'Reimbursement', url: '.', icon: 'monetization_on'},
  ];

  private _mobileQueryListener: () => void;
  public menuCollapsed:any = true;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.dialog = dialog;
  }


  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TimeTrackerComponent, {
      width: '600px',
      height: '800px',
      position: {bottom: "60%", left:"20%", right:"20%", top:"20%"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
