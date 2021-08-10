import React from 'react';

const BookViewer = (props) => {
    return ( 
        <div className="row row-spacer" > 
        <div className="col-md-4"> 
            {/* Button here to move to the previous book */}
            <button onClick={props.previousBook}>Previous book</button>
        </div>
        <div className="col-md-4"> 
            {/* Display book with cover here */}
            <h1>{props.book.title}</h1>
            <h4>{props.book.author}</h4> 
        </div>
        <div className="col-md-4"> 
            {/* Button here to move to the previous book */}
            <button onClick={props.nextBook}>Next Book</button>
        </div>
    </div>
     );
}
 
export default BookViewer;