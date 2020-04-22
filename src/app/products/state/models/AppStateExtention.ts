import { IProductState } from './IProductState';
import * as RootState from './../../../state/models/IAppstate';


export interface AppState extends RootState.IAppState{
    products : IProductState
}