import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems: object;

  constructor(
    private data: DataService
  ) {
  }

  ngOnInit(): void {
      
      // this.navData.getHeaderNav().subscribe(data => {
      //   this.navItems = data;
      // });
  
      this.navItems = this.data.getHeaderNav();
     
  }

}
