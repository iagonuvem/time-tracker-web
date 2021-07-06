import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  activeTab: any = 0;
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

  // Doughnut
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 1,
    cutoutPercentage: 65
  }

  public doughnutChartColors = [
    {
      backgroundColor: ['#0272B1', '#0496FF', '#A3D3FF'],
    },
  ];
  public doughnutChartLabels: Label[] = ['Development', 'Design', 'QA'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    // [50, 150, 120],
    // [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    public dialog: MatDialog) {
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
  
  changeActiveTab(tab:any){
    this.activeTab = tab;
  }
 
}
