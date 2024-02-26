import { Controller, Get ,Req, Res, Query} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/wc')
  redirect(@Req() req: Request, @Res() res:Response, @Query('uri') q: string): void {
    // const url = 'https://t.me/MatthewTestWalletBot/wallet?startapp=' + encodeURIComponent(q);
    console.log(q)
    let paramString =encodeURIComponent(q)
    console.log(paramString)

     let    params = paramString
         .replaceAll('/','%2F' )
         .replaceAll(',','%2C' )
         .replaceAll(':','%3A' )
         .replaceAll('.','%2E' )
         .replaceAll('-','%2D' )
         .replaceAll('_', '%5F' )
         .replaceAll('&','-' )
         .replaceAll('=','__' )
         .replaceAll( '%','--')

    // const url = 'https://t.me/MatthewTestWalletBot/wallet?startapp=' + params;
    // // const url = 'https://t.me/MatthewTestWalletBot/wallet';
    // res.redirect(url)
    const url = 'https://t.me/mpc_wallet_connect_bot/tobi_wallet?startapp=' + `${params !== "undefined" ? params : 'wc'}`;
    // const url = 'https://t.me/MatthewTestWalletBot/wallet';
    res.redirect(url)
  }
}
