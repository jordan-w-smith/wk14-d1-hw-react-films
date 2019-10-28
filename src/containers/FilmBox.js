import React, {Component} from "react";
import FilmList from "../components/FilmList";
import "./film-box.css"

class FilmBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                  id: 1,
                  name: "Western Stars",
                  url: "https://www.imdb.com/title/tt10687158/?ref_=rlm"
                },
                {
                  id: 2,
                  name: "Doctor Sleep",
                  url: "https://www.imdb.com/title/tt5606664/?ref_=rlm"
                },
                {
                  id: 3,
                  name: "Sorry We Missed You",
                  url: "https://www.imdb.com/title/tt8359816/?ref_=rlm"
                },
                {
                  id: 4,
                  name: "After The Wedding", 
                  url: "https://www.imdb.com/title/tt7985692/?ref_=rlm"
                },
                {
                  id: 5,
                  name: "Brittany Runs a Marathon",
                  url: "https://www.imdb.com/title/tt7671064/?ref_=rlm"
                }
              ]
        }
    }

    render() {
        return (
            <div className="filmBox">
                <h1>Upcoming Films</h1>
                <FilmList films={this.state.data}></FilmList>
                <button><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases</a></button>
            </div>
        )
    }
    
}




export default FilmBox