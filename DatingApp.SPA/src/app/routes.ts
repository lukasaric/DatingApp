import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const appRoutes: Routes = [
{ path: 'home', component: HomeComponent },
{
  path: '',
  runGuardsAndResolvers: 'always',
  canActivate: [AuthGuard], // anything (path: '') we want to protect is covered in parent(authGuard covers all children routes)
  children: [
    { path: 'members', component: MemberListComponent } ,
    { path: 'members/:id', component: MemberDetailComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'lists', component: ListsComponent },
  ]
},
{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];
