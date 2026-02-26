import Book from './Book';

function App(){
    const bookJason = [
        {
            image:"https://www.bing.com/th/id/OIP.04Sdnuwg_UpPiL3vhPG16QHaJQ?w=157&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            title: "Physics",
            price: "550/-"
        },
        {
            image: "https://th.bing.com/th/id/OIP.4sH-8jMvjVtMgfijC4mzCgHaJd?w=178&h=227&c=7&r=0&o=7&pid=1.7&rm=3",
            title:"Chemistry",
            price:"600/-"
        },
        {
            image:"https://th.bing.com/th/id/OIP.wf39tOpqBA-hXvhoY-4yiQHaJo?w=178&h=232&c=7&r=0&o=7&pid=1.7&rm=3",
            title:"Maths",
            price: "888/-"
        }
    ]
    return (
        <div className="booklist">
           {
            bookJason.map((b,i)=>(
                <Book key={i} books ={b}/>
            ))
           }
        </div>
    )
}
export default App;