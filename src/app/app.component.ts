import { Component, Input, NgZone, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper, AgmDataLayer } from '@agm/core';

import * as R from 'ramda';

declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public lat: Number = 24.801577;     // 初始經緯度
  public lng: Number = 120.971560;    // 初始經緯度
  public isDraw: Boolean = false;     // 是否監聽地圖繪製
  public isShowInfo: Boolean = true;  // 是否顯示資訊
  public paths: any = [];             // 路徑資料
  public pathsJSON: any = [];         // 路徑資料-轉JSON
  public color: string = '#f00';      // 調色盤

  constructor(
    private zone: NgZone,
    private mapsAPILoader: MapsAPILoader,
  ) { }

  ngOnInit() {
  }

  /**
   * 顯示/關閉資訊
   */
  public infoMode() {
    this.isShowInfo = !this.isShowInfo;
  }

  /**
   * 繪製路徑
   * @param point 點座標
   */
  public addPolyline(point: any) {
    if (this.isDraw) {
      this.paths.push(point.coords);
      this.pathsJSON = JSON.stringify(this.paths);
    }
  }

  /**
   * 地圖操作 - 回上一步
   */
  public rollBack() {
    if (this.isDraw) {
      this.paths = R.dropLast(1, this.paths);
    }
  }

  /**
   * 模式 - 監聽地圖
   */
  public drawMode() {
    this.isDraw = true;
  }

  /**
   * 模式 - 關閉監聽
   */
  public viewMode() {
    this.isDraw = false;
  }

  /**
   * 模式 - 關閉監聽 & 清除資料
   */
  public cleanMode() {
    this.paths = [];
    this.isDraw = false;
  }
}
