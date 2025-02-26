import '../scss/PortfolioPage.scss';
import qwe from "../assets/1.png";

export const PortfolioPage = () => {
  return (
    <div className="container-portfolio">
      <div className="title-container">
        <h1 className="title">
          PORTFOLIO 
        </h1>
      </div>
      <div className="example-box">
        <a href="/" target="_blank" >
        <div className="image">
          <img className="preview" src={qwe} alt='' width="230px" />  
          </div>
        <div className='technologies'>
          HTML, JavaScript, CSS
          <p className="description">
            Dior Landing Page using <br/> metodology of BEM
          </p>
        </div>
        </a>
      </div>
    </div>
  )
};
