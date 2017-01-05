import { Component } from '@angular/core';
import { StockService } from './stock.service';
@Component({
    selector: 'stocks',
    template: `<h1>Stocks</h1>
    {{title}}
    <ul [ngStyle]="{'color':myColor, 'font-size':mySize}">
        <li *ngFor="let stock of stocks">
        {{stock}}
        </li>
    </ul>

    <hr> 

    {{stockMarkets.length}}
    <ul *ngIf="stockMarkets.length<=5"[ngClass]="{customClass:isColorViolet, centerClass:isCenter}">
        <li *ngFor="let stockMarket of stockMarkets">
        {{stockMarket}}
        </li>
    </ul>

    <hr>

    <div [ngSwitch]="market" >
        <div *ngSwitchCase="'NYSE'">NEW YORK STOCK EXCHANGE </div>
        <div *ngSwitchCase="'LSE'">LONDON STOCK EXCHANGE </div>
        <div *ngSwitchDefault>Could not find a match </div>
    </div> 
    `,
    styles:[`
        .customClass{
            color:violet;

        }
        .centerClass{
            text-align:center;
        }
    `]
})
export class StocksComponent {
    title = 'List of Stocks:';
    //stocks = ['AAPL', 'IBM', 'GOOG'];
    isCenter=true;
    isColorViolet=true;
    mySize='200%';
    myColor='red';
    market='LSE';
    stocks;
    showStockMarkets=true;
    stockMarkets=['NYSE','NASDAQ','EURONEXT','HKSE','LSE'];
    constructor(stockService:StockService){
        this.stocks=stockService.getStocks();

    }

}