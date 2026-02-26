import './App.css';
function Book({books}){
    return(
        <div className="card">
            <img src= {books.image} width="200" height="200" alt="Image" />;
            <h3>Title: {books.title}</h3>
            <h4>Price: {books.price} </h4>
            <button>Add to Cart</button>
        </div>
    )
}

export default Book;