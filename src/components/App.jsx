import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import Footer from './Footer/Footer';
import CreateBook from './CreateBook/CreateBook';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "The Hobbit", author: "JRR Tolkein"},
            {title: "Dune", author: "Frank Herbert"},
            {title: "The half-blood Prince", author: "J.K. Rowling"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPrevious = () =>{
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    bookCreate = (newBook) => {
        console.log('from the bookCreate on app component', newBook);
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length - 1
        })
    }

    render(){
        return (
            <div className="container-fluid"> 
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPrevious}/>
                <CreateBook createNewBook={this.bookCreate} />
                <Footer />
            </div>
        )
    }    
}

export default App;