import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

// import page component
import {HomeCmp} from '../home/home';
import {AboutCmp} from '../about/about';
import {ScheduleCmp} from '../schedule/schedule';
import {PeopleList} from '../../services/people_list';

@Component({
  selector: 'app',
  viewProviders: [PeopleList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/about', component: AboutCmp, as: 'About' },
  { path: '/schedule', component: ScheduleCmp, as: 'Schedule' }
])
export class AppCmp {}
