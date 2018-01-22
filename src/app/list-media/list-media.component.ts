import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
  printThis: string;
  mediaArray: any;

  constructor(public mediaService: MediaService) {
  }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data => {
      this.mediaArray = data;
      this.mediaArray.map(x => x.thumbnail = x.filename.split('.')[0] + '-tn320.png');
    });
  }

}
