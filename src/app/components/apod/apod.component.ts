import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  apod: any;

  constructor(private ApiService:ApiService) { }

  ngOnInit() {
    this.ApiService.getApod().subscribe(res => {
      this.apod = res;
      console.log(this.apod);
    })
  }

}
