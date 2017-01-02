import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks.component';

const appRoutes:Routes=[{
    path:'stocks',
    component: StocksComponent
}];