import { Component, Input, NgZone, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper, AgmDataLayer } from '@agm/core';

declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: string = 'GEO Converter';
  public lat: number = 24.801577;
  public lng: number = 120.971560;
  public radius: number = 50000;

  constructor(
    private zone: NgZone,
  ) { }

  ngOnInit() {
  }

}
