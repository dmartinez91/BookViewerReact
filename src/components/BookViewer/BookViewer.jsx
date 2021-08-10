import React from 'react';
import Book from '../Book/Book';

const BookViewer = (props) => {
    return ( 
        <div className="row row-spacer" > 
        <div className="col-md-4"> 
  
            <button onClick={props.previousBook}>Previous book</button>
        </div>
        <div className="col-md-4"> 
            {/* Display book with cover here */}
            <Book book={props.book} />
        </div>
        <div className="col-md-4"> 

            <button onClick={props.nextBook}>Next Book</button>
        </div>
    </div>
     );
}
 
export default BookViewer;