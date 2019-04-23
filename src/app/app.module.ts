import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPageModule} from '../pages/tabs/tabs.module';
import { RegisterPage } from '../pages/register/register';
import { ProfilPageModule } from '../pages/profil/profil.module';
import { PaketPageModule } from '../pages/paket/paket.module';
import { PembayaranPageModule } from '../pages/pembayaran/pembayaran.module';
import { PengaturanPageModule } from '../pages/pengaturan/pengaturan.module';
import { TamuPageModule } from '../pages/tamu/tamu.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ProfilPageModule,
    TabsPageModule,
    PaketPageModule,
    PembayaranPageModule,
    PengaturanPageModule,
    TamuPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
