import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

hours: String[] = [];

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    for(let hour = 0; hour < 24; hour++) {
      this.hours.push(moment({ hour }).format('h:mm A'));
      this.hours.push(
          moment({
              hour,
              minute: 30
          }).format('h:mm A')
      );
  }
  }

}
