import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeFeatureCardComponent } from './home-feature-card/home-feature-card.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';



@NgModule({
  declarations: [HomeComponent, HomeFeatureCardComponent, HomeFeaturesComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
