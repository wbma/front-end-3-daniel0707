import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {forEach} from '@angular/router/src/utils/collection';
import {DigitransitService} from '../services/digitransit.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
  printThis: string;
  mediaArray: any;
  stopArray: any;

  constructor(public mediaService: MediaService, private digiService: DigitransitService) {
  }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data => {
      this.mediaArray = data;
      this.mediaArray.map(x => x.thumbnail = x.filename.split('.')[0] + '-tn320.png');
    });
    this.digiService.getRoutes('Vallikatu').subscribe(response => {
      this.stopArray = response['data'].stops;
      }
    );
  }
}
