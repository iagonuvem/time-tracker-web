import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  mobileQuery: MediaQueryList;
  
  menuNav = [
    { title: 'Home', url: '/members/home', icon: 'home'},
    { title: 'Time Tracker Settings', url: '/members/settings', icon: 'query_builder'},
    { title: 'Request approval', url: '/members/request-approval', icon: 'surfing'},
    // { title: 'Rewards and Recognition', url: '.', icon: 'emoji_events'},
    // { title: 'Referral Program', url: '.', icon: 'person_add'},
    // { title: 'Reimbursement', url: '.', icon: 'monetization_on'},
  ];

  private _mobileQueryListener: () => void;
  public menuCollapsed:any = true;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher) {
      this.initializeApp();
      this.mobileQuery = media.matchMedia('(max-width: 880px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  initializeApp(){
    // Coisas para fazer ao iniciar a aplicacão
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
