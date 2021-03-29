import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profil-user-infos',
  templateUrl: './profil-user-infos.component.html',
  styleUrls: ['./profil-user-infos.component.scss']
})
export class ProfilUserInfosComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit(): void {
  }

}
