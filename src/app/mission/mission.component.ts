import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { Mission} from '../domain//mission.interface';
@Component({
  moduleId: module.id,
  selector: 'mission',
  templateUrl: 'mission.component.html',
  styleUrls: ['mission.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class MissionComponent implements OnInit {
  @Input("mission") public mission: Mission;

  constructor() { }

  ngOnInit() {
  }

}
