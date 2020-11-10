import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ReservationService } from '../reservation.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // default id in case you want to bind it to the view later
  id = 1337;

  selectedDate: Date;
  formattedSelectedDate: string;
  selectedHour: string;

  available: boolean;

  hours: string[] = [];

  constructor(private snackBar: MatSnackBar, private reservationService: ReservationService) { }

  openSnackBar(error: boolean): void {
    let message: string;
    let action: string = 'OK';

    if (error)
      message = 'Something went wrong with the server, please contact the website administrator';
    else if (!this.selectedDate && !this.selectedHour)
      message = 'Please select a valid hour and a valid date';
    else if (!this.selectedDate)
      message = 'Please select a valid date';
    else if (!this.selectedHour)
      message = 'Please select a valid hour';
    else if (this.available)
      message = 'The resource is available on ' + this.formattedSelectedDate + ' at ' + this.selectedHour;
    else {
      message = 'Sorry, the resource is not available on ' + this.formattedSelectedDate + ' at ' + this.selectedHour;
      action = 'I understand';
    }

    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  ngOnInit(): void {
    for (let hour = 0; hour < 24; hour++) {
      this.hours.push(moment({ hour }).format('HH:mm'));
      this.hours.push(
        moment({
          hour,
          minute: 30
        }).format('HH:mm')
      );
    }
  }

  showAvailability(): void {
    if (!this.selectedDate || !this.selectedHour) {
      this.openSnackBar(false);
    }
    else {
      this.reservationService.getAvailability(this.formattedSelectedDate, this.selectedHour, this.id)
        .subscribe((data: any) => {
          this.available = data.available;
          this.openSnackBar(false);
        },
          (error: HttpErrorResponse) => {
            this.openSnackBar(true);
        });
    }
  }

  dateChange(): void {
    this.formattedSelectedDate = moment(this.selectedDate).format('YYYY-MM-DD');
  }

}
