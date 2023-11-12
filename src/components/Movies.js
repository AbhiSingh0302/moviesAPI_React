import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CardGroup, Row } from "react-bootstrap";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.post("https://hoblist.com/api/movieList",{
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting"
        }).then(resp => {
            console.log(resp.data.result);
            setMovies(resp.data.result);
        })
    },[])

    const clickHandler = () => {
        alert("Company: Geeksynergy Technologies Pvt Ltd\nAddress: Sanjayanagar, Bengaluru-56\nPhone: XXXXXXXXX09\nEmail: XXXXXX@gmail.com")
    }

    return <>
    <header style={{margin: "2rem 0", textAlign: "center"}}>
        <h1>Movies</h1>
        <Button onClick={clickHandler}>Company Info</Button>
    </header>
    <Row xs={1} md={2} className="g-4 justify-content-md-center">
    {movies.map(ele => (
        <Card style={{ width: '18rem', margin: "5px", padding: "5px" }} key={ele._id}>
        <Card.Img variant="top" src={ele.poster} />
        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          <Card.Text>
            <p>Director: {ele.director.join(", ")}</p>
            <p>Genre: {ele.genre}</p>
            <p>Language: {ele.language}</p>
            <p>Stars: {ele.stars.join(", ")}</p>
            <p>Voting: {ele.voting}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    ))}
    </Row>
    </>
}

export default Movies;