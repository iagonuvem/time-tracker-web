import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import { CoreService } from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  
  menuNav = [
    { title: 'Home', url: '.', icon: 'home'},
    { title: 'Time Tracker Settings', url: '.', icon: 'query_builder'},
    { title: 'Request approval', url: '.', icon: 'surfing'},
    // { title: 'Rewards and Recognition', url: '.', icon: 'emoji_events'},
    // { title: 'Referral Program', url: '.', icon: 'person_add'},
    // { title: 'Reimbursement', url: '.', icon: 'monetization_on'},
  ];

  private _mobileQueryListener: () => void;
  public menuCollapsed:any = true;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private coreService: CoreService) {
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
