import React from "react";
import { Col, Container, Row } from "reactstrap";
import ImageService from "../services/ImageService";
import PeopleCard from "./PeopleCard";

// import 'swiper/css/swiper.css';


type mProps = {
  // hideDialog: () => void

}

type mstate = {
  activeIndex: number,
  currentIndex: number,
  animating: boolean,
  people: Array<{ id: number, url: string, name: string, company: string, description: string }>

}

class Home extends React.Component<mProps, mstate>{
  constructor(props: any) {
    super(props);
    this.state = {
      activeIndex: 0,
      currentIndex: 0,
      animating: false,
      people: []
      // people: [
      //   {
      //     id: 1,
      //     name: "David Davidson",
      //     url: "img/image_01.jpg",
      //     company: "Some Company, Inc",
      //     description: "Met at a party. Will connect with later"
      //   },
      //   {
      //     id: 2,
      //     name: "Mark Markson",
      //     url: "img/image_02.png",
      //     company: "Some Company, Inc",
      //     description: "Met at a party. Will connect with later"
      //   },
      //   {
      //     id: 3,
      //     name: "Judy Judyson",
      //     url: "img/image_03.jpg",
      //     company: "Some Company, Inc",
      //     description: "Met at a party. Will connect with later"
      //   },
      //   {
      //     id: 4,
      //     name: "James Jameson",
      //     url: "img/image_04.jpg",
      //     company: "Some Company, Inc",
      //     description: "Met at a party. Will connect with later"
      //   },
      //   {
      //     id: 5,
      //     name: "Judy Judyson",
      //     url: "img/image_03.jpg",
      //     company: "Some Company, Inc",
      //     description: "Met at a party. Will connect with later"
      //   },
      //   {
      //     id: 6,
      //     name: "David Davidson",
      //     url: "img/image_01.jpg",
      //     company: "Some Company, Inc",
      //     description: "Met at a party. Will connect with later"
      //   },
      //   {
      //     id: 7,
      //     name: "Mark Markson",
      //     url: "img/image_02.png",
      //     company: "Some Company, Inc",
      //     description: "Met at a party. Will connect with later"
      //   },
      //   {
      //     id: 8,
      //     name: "Judy Judyson",
      //     url: "img/image_03.jpg",
      //     company: "Some Company, Inc",
      //     description: "Met at a party. Will connect with later"
      //   },
      // ]

    }
    this.getImages = this.getImages.bind(this);
  }

  getImages() {
    ImageService.getImages().then((res) => {
      console.log('res: ', res);
      if (res != undefined) {
        let peoples = Array<{ id: number, url: string, name: string, company: string, description: string }>();
        res.data.data.map((item: any) => peoples.push({
          "id": item.id,
          "url": item.url,
          "name": item.name,
          "company": item.comany,
          "description": item.description,

        }));
        this.setState({
          people: peoples
        });
      }
    });
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.getImages()
  }





  render() {
    console.log('render home');
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide mt-2"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="img/image_05.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="img/image_06.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="img/image_07.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container">
          <span>
            <h1>
              DANH SÁCH ĐỒ NỘI THẤT
            </h1>
          </span>

        </div>
        <Container fluid>
          <Row>
            {
              this.state.people.map(person => {
                return (
                  <Col sm="3">
                    <PeopleCard person={person} />
                  </Col>
                )
              })
            }
          </Row>
        </Container>

      </div >
    );

  }
}

export default Home;