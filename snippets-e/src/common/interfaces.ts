export interface Book {
    title: string;
    shortDescription: string;
    authors: Author[];
}

export interface Person {
    firstName: string;
    lastName: string;
}

export interface Author extends Person {
    penName: string;
    location: number;
}


interface ItemConstructor {
    new (id: string): Item
}

interface IItem {   
    id: string;
}

class Item implements IItem {
    constructor(public id: string) {

    }
}

interface X{
    [id: number] : string;
}
let X = ["Hello", "Hello1"];

interface ItemMap{
    [id: string]: IItem;
}

class ItemsCache {
    // Anonymous interface ==> { [key: string]: IItem }
    //private itemsCache: { [key: string]: IItem };
    private itemsCache: ItemMap;
    constructor(private con: ItemConstructor) {
        this.itemsCache = {};
    }

    public createItem(id: string): IItem {
        if (!!this.itemsCache[id]) {
            return this.itemsCache[id];
        }

        const item: IItem = new this.con(id);
        this.itemsCache[id] = item;
        return item;
    }
}

let t = new ItemsCache(Item);
t.createItem('1');


//export const CLASS_INFO = Symbol();


export interface Cat{
    age: number;
}

type ReadOnlyCat = {
    readonly [P in keyof Cat]: Cat[P];
}

type GenericType<T> = {
    readonly [P in keyof T]: T[P];
}

type t = GenericType<Cat>;

const y:t = {    
    age:100
}

type Proxy<T> = {
    get(): T;
    set(value : T):void;
}

type GenericProxy<T> = {
    [P in keyof T]: Proxy<T[P]>;
}

type GenericCat = GenericProxy<Cat>;

const cat1:GenericCat = null;

function getPropertyValue<T, K extends keyof T>(obj: T, propertyName: K):T[K]{
return obj[propertyName];
}
