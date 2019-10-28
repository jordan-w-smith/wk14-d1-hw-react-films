import React, {Component} from "react";
import Film from './Film';

class FilmList extends Component {
    render() {
        const filmNodes = this.props.films.map(film => {
            return (
                <Film name={film.name} key={film.id} url={film.url}></Film>
            )
        })


        return (
            <div>
                <ul>
                    {filmNodes}
                </ul>
            </div>
        )

    }
}

export default FilmList;