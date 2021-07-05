import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  _collection!: Array<any>;
  _collectionName!: string;
  _entity: any;
  _entityCollection!: BehaviorSubject<Array<any>>;
  _isConfigured = false;
  constructor() { this.configure(); }

  configure(){
    const className = this.constructor.name.toLowerCase().replace("service","");
    this._collectionName = `${className}s`;
    this._entityCollection = new BehaviorSubject<Array<any>>([]);
    this.loadInitialData()
    this._isConfigured = true;
  }
  
  loadInitialData = () =>{
    const stringContent = localStorage.getItem(this._collectionName);
    this._collection =  JSON.parse( stringContent || "[]");
    this._entityCollection.next(this._collection)
  };

  get entities(): Observable<Array<any>>{
    this.checkConfig();
    return this._entityCollection.asObservable();
  }
  private setLocalStorage(){
    this.checkConfig();
    const key = this._collectionName;
    const value = `[${this._collection.map(e => JSON.stringify(e))}]`; 
    localStorage.setItem(key,value);
  }
  private checkConfig = () => {if(!this._isConfigured){throw "Not configured. Call thisService.configure(someEntity) on your ngOnInit"}};
  private refreshCollections = () => {this.setLocalStorage();this._entityCollection.next(this._collection)};
  
  deleteEntity(entity: any) {
    this.checkConfig();
    const findEntity = (e: { id: any; }) => e.id == entity.id;
    this._collection.splice(this._collection.findIndex(findEntity), 1);
    this.refreshCollections();
  }
  
  addEntity(entity: any){
    this.checkConfig();
    this._collection.push([entity]);
    this.refreshCollections();
  }

  updateEntity(entity: any){
    this.checkConfig();
    const findEntity = (e: { id: any; }) => e.id == entity.id;
    const index = this._collection.findIndex(findEntity);
    this._collection[index] = entity;
    this.refreshCollections();
    
  }
}
