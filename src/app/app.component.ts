import { Component } from '@angular/core';
import { CoreService } from './services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(
    private coreService: CoreService) {
      this.initializeApp();
  }

  initializeApp(){
    // Coisas para fazer ao iniciar a aplicacão
  }
}
