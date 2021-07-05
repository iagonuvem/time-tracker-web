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
  constructor() {  }

  configure(entity: any){
    this._collectionName = entity.constructor.name;
    this.loadInitialData()
    this._entityCollection = new BehaviorSubject<Array<typeof entity>>(this._collection);
    this._isConfigured = true;
  }
  
  loadInitialData = () =>{this._collection = JSON.parse(localStorage.getItem(this._collectionName) || "[]");};

  get entities(): Observable<Array<any>>{
    this.checkConfig();
    return this._entityCollection;
  }
  private setLocalStorage(){
    this.checkConfig();
    const key = `${this._collectionName}s`;
    const value = `[${this._collection.map(e => JSON.stringify(e))}]`; 
    localStorage.setItem(key,value);
  }
  private checkConfig = () => {if(!this._isConfigured){throw "Not configured. Call thisService.configure(someEntity) on your ngOnIOnit"}};
  private refreshCollections = () => {this.setLocalStorage();this._entityCollection.next(this._collection)};
  
  deleteEntity(entity: any) {
    this.checkConfig();
    const findEntity = (e: { id: any; }) => e.id == entity.id;
    this._collection.splice(this._collection.findIndex(findEntity), 1);
    this.refreshCollections();
    //deletar da collection
    //talvez deletar do localstorage, não sei
    //ou talvez definir de novo essa chave no local storage
    //chamar o .next() pra atualizar a coleção talvez? O que retornar?
    
    //escrever método pra salver no localstorage tbm (localStorage.setItem("q",`[${q.map(e => JSON.stringify(e))}]`);)
    //fazer método pra converter o outro lado tbm: var t = JSON.parse(localStorage.getItem("q"));
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
