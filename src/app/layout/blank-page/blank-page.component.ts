import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
  data: any;
  zoho_id = '';
  zoho =
    {
      name: '',
      phone: '',
      fax: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    };

  constructor(private httpService: HttpService,
              private elementRef: ElementRef) { }

 ngOnInit() {
    this.httpService
    .getZohoID()
    .subscribe(data => this.data = data)
  }


  onChange(id) {
    this.httpService
    .getZohoAccount(id)
    .subscribe(zoho => this.zoho = zoho)
  }


}
