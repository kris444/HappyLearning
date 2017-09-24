import * as React from 'react';
import * as utils from '../common/util';
import { Book, Author, Person } from '../common/interfaces';

import DeliveryService from "../common/fluentApi";
import '../common/extensions';

import PButton from '../components/Button';
import TextInput from '../components/TextInput';

import {Upload} from './upload';
import SimpleGrid from './SimpleGrid';
import { Button, Checkbox, ControlLabel, FormControl, FormGroup, Navbar, Nav, NavItem, NavDropdown,MenuItem  } from 'react-bootstrap';


interface IHelloProps {
    message: string
}

interface IState{
    description:string;
}

let [book1, ...others] = utils.GetAllBooks();
class PVM extends React.Component<IHelloProps, IState>{

    private id: string;

    render() {
        return (
          <div>
              {/* <Upload></Upload> */}
              <SimpleGrid>
                  </SimpleGrid>

         </div>
        );
    }

    getAllBooknames(): string[] {

        var deliverryService: DeliveryService = new DeliveryService();
        deliverryService.GetLocation().DropIn();

        // extended property from the ReactCompnent
        //Declarative compomnents
        //this.getName();

        let allBooks = utils.GetAllBooks().map(this.getBookName);
        let books: string[] = ['Train', ...allBooks];

        return books;
    }

    getBookFancyName(book?: Book): string {
        return `Book ${book.title} is authored by ${book.shortDescription}`;
    }

    //here the title is property from Book and bookTitle is alias
    getBookName({ title: bookTitle }: Book): string {
        return bookTitle;
    }

    getLocation(book: Book): number {
        let bookAuthor: [string, number] = [book.title, book.authors[0].location]
        let a1 = this.getCountryByLocation(123);
        return bookAuthor[1];
    }

    //union
    getCountryByLocation(location: (number | string)): string {

        /*
            use typeof location == number
             OR
             instanceof for types
        */
        //enum like behavior
        let color: 'RED' | 'GREEN' = 'RED';

        //type aliasses
        type MyfavouriteColors = 'RED' | 'GREEN';
        let favColor: MyfavouriteColors = 'GREEN';

        return 'India';
    }

    //intersection allproperties in Book and Author
    getAllIntersectionPoints(): Book & Author {
        return {
            title: 'string',
            shortDescription: 'string',
            authors: [],
            firstName: 'string',
            lastName: 'string',
            penName: 'string',
            location: 1,
        };
    }

}

export default PVM

//export const Hello = (props: IHelloProps) => <h1>Hello from {props.compiler} and {props.framework}</h1>