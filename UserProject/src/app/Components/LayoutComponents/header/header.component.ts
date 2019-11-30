import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount:number=0;
  constructor(private sharedServices:SharedService) { }

  ngOnInit() {
    this.sharedServices.currentMessage.subscribe(msg => this.cartItemCount = msg);
  }

}
