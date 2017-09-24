import { Book, Person, Author } from "./interfaces";


export function GetAllBooks(): Book[] {
    let author1: Author = { firstName: "Ryan", lastName: "Lewis", penName: "ray", location: 122 };
    let author2: Author = { firstName: "Bryan", lastName: "Lewis", penName: "bay", location: 134 };
    let books: Book[] = [
        { title: 'Ha ha', shortDescription: 'Just for fun', authors: [author1] },
        { title: 'One more  ha', shortDescription: 'Again on fun', authors: [author1, author2] }
    ];
    return books;
}

function Identity<T>(arg: T): T {
    return arg;
}

let myIdentity: { <T>(arg: T): T };


interface IIdentity {
    <T>(arg: T): T;
}

let mIdentity: IIdentity = Identity;

abstract class Animal {
    constructor(protected name: string) { }

    abstract makeSound(input : string) : string;

    move(meters:number) {
        alert(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }

    makeSound(input : string) : string {
        return "sssss"+input;
    }

    move() {
        alert("Slithering...");
        super.move(5);
    }
}