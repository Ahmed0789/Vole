import { Component, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  @ViewChild(MatSidenav)
  sidenav! : MatSidenav;


  constructor(private observer : BreakpointObserver) { }

  ngOnChanges(changes: SimpleChanges): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode ='over';
        this.sidenav.close()
      }
      else{
        this.sidenav.mode = 'side';
        this.sidenav.open()
      }
    })
  }
}
