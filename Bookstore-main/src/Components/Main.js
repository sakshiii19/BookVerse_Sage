import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    // document.addEventListener("keydown", function (evt) {
    //     sBook(evt);
    // });
    const searchBook = (evt) => {
        // console.log("dishant");
        if (evt.key === "Enter") {
            console.log("Hello");
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyCsETqPSiDsvh_lnJbAn8dki-2WI0Wtc5c' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }


    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyUp={searchBook} />
                        <button onClick={searchBook} ><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    )
}
export default Main;