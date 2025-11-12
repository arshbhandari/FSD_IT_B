
function Book(book){
    const image = React.createElement("img",{
    src: book.image,
    width: 200,
    height: 200,
    alt:"book image"
    },null)
    const h3 = React.createElement("h3",null,`Title: ${book.title}`)
    const h4 = React.createElement("h3",null,`Price: ${book.price}`)
    const btn = React.createElement("button",null,"Add to cart")
    const div = React.createElement("div",{className:"card"},image,h3,h4,btn)
    return div;
}
const books = [
    {
        image : "https://m.media-amazon.com/images/I/911-2v5Yq8L._SL1500_.jpg",
        title:"physics",
        price: "451/-"
    },
    {
        image : "https://m.media-amazon.com/images/I/911-2v5Yq8L._SL1500_.jpg",
        title:"Chemistry",
        price: "555/-"
    },
    {
        image : "https://m.media-amazon.com/images/I/911-2v5Yq8L._SL1500_.jpg",
        title:"Math",
        price: "761/-"
    }
]
const bookele = books.map((b,i)=>(
        React.createElement(Book,{
           key: i,
           image : b.image,
           title : b.title,
           price: b.price 
        },null)
))
const booklist = React.createElement("div",{className:"booklist"},...bookele)
const parent = document.getElementById("root")
const root = ReactDOM.createRoot(parent);
root.render(booklist)

