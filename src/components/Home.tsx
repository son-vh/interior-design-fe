import React from "react";

// import 'swiper/css/swiper.css';


type mProps = {
  // hideDialog: () => void

}

type mstate = {
  activeIndex: number,
  currentIndex: number,
  animating: boolean,
  items: Array<{ src: string, altText: string, caption: string }>

}

class Home extends React.Component<mProps, mstate>{
  constructor(props: any) {
    super(props);
    this.state = {
      activeIndex: 0,
      currentIndex: 0,
      animating: false,
      items: [
        {
          src: 'https://mdbootstrap.com/img/new/slides/041.jpg',
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: 'https://mdbootstrap.com/img/new/slides/042.jpg',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: 'https://mdbootstrap.com/img/new/slides/043.jpg',
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ]
    }
  }


  next = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    });
  }

  previous = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  }

  goToIndex = (newIndex: number) => {
    if (this.state.animating) return;
    this.setState({
      activeIndex: newIndex
    });
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

      </div>
    );

  }
}

export default Home;