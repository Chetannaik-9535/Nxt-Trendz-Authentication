// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <div className="Home-container">
      <Header />
      <div className="body-container">
        <div className="descriptions-container">
          <h1 className="home-page-heading">Clothes That Get You Noticed...</h1>
          <p className="description">
            Fashion is part of the daily air and it does not quite that it help
            that it changes all the time. Clothes have always been a maker of
            the era and we are in all the revelution. Your fashion makes you
            been seen the heard that way you are So. Celebrate the season new
            and exiting fashion in your own way.
          </p>
          <button className="button">Shop Now</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="Home-page-img"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </>
)

export default Home
