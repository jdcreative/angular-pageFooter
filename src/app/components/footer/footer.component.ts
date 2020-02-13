import { Component, OnInit } from '@angular/core';

import {formatDate } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  closeResult: string;
  year: string;
  date = new Date();


  constructor( ) { 
    this.year = formatDate(this.date, 'yyyy', 'en-US');
  }



  isLogin() {
    // let nickname: string = this.ssoService.getValue('LOGIN_NICKNAME');
    let nickname: string = ''
    if (nickname === undefined || nickname === '' || nickname === null) {
      return false;
    } else {
      return true;
    }
  }
}
