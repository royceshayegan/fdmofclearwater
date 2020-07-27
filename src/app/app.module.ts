import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full',
        data: { 
          title: 'EDM, Toolmaking, CNC, General Machining',
          metaDescription: 'Machining shop specializing in EDM, Toolmaking, Wire EDM, CNC, General Machining, On-site Reverse-Engineering, Rosan Serrations, Mold Making, Blanchard Grinding, and more.'
        }
      },
      { path: 'about', loadChildren: './about/about.module#AboutModule',
        data: { 
          title: 'EDM, Toolmaking, CNC, General Machining',
          metaDescription: 'Machining shop specializing in EDM, Toolmaking, Wire EDM, CNC, General Machining, On-site Reverse-Engineering, Rosan Serrations, Mold Making, Blanchard Grinding, and more.'
        }
      },
      { path: 'equipment', loadChildren: './equipment/equipment.module#EquipmentModule',
        data: { 
          title: 'EDM, Toolmaking, CNC, General Machining',
          metaDescription: 'Machining shop specializing in EDM, Toolmaking, Wire EDM, CNC, General Machining, On-site Reverse-Engineering, Rosan Serrations, Mold Making, Blanchard Grinding, and more.'
        }
      },
      { path: 'services', loadChildren: './services/services.module#ServicesModule',
        data: { 
          title: 'EDM, Toolmaking, CNC, General Machining',
          metaDescription: 'Machining shop specializing in EDM, Toolmaking, Wire EDM, CNC, General Machining, On-site Reverse-Engineering, Rosan Serrations, Mold Making, Blanchard Grinding, and more.'
        }
      },
      { path: 'contact', loadChildren: './contact/contact.module#ContactModule',
        data: { 
          title: 'EDM, Toolmaking, CNC, General Machining',
          metaDescription: 'Machining shop specializing in EDM, Toolmaking, Wire EDM, CNC, General Machining, On-site Reverse-Engineering, Rosan Serrations, Mold Making, Blanchard Grinding, and more.'
        }
      },
    ]),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
