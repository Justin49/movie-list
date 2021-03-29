import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProfilComponent } from './profil/profil.component';
import { ProfilUserInfosComponent } from './profil-user-infos/profil-user-infos.component';



@NgModule({
  declarations: [ProfilComponent, ProfilUserInfosComponent],
  imports: [
    SharedModule
  ]
})
export class ProfilModule { }
