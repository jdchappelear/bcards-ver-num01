import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-businesscards',
  templateUrl: './businesscards.component.html',
  styleUrls: ['./businesscards.component.css']
})
export class BusinesscardsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
