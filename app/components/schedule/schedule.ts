import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
  selector: 'schedule',
  templateUrl: './components/schedule/schedule.html',
  styleUrls: ['./components/schedule/schedule.css'],
  directives: [MATERIAL_DIRECTIVES]
})
export class ScheduleCmp {}
