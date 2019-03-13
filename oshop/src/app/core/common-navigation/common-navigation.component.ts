import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'common-navigation',
  templateUrl: './common-navigation.component.html',
  styleUrls: ['./common-navigation.component.css']
})
export class CommonNavigationComponent implements OnInit {

  @Input()
  moduleLinks;

  constructor() { }

  ngOnInit() {
  }

}
