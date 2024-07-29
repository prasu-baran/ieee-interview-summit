import 'animate.css';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import canada from "../assets/img/diamond_sponsor_1_dark.webp";
import russia from "../assets/img/2.png"
import america from "../assets/img/3.png"
import india from "../assets/img/Life_Members_program_logo_Platinum_level-removebg-preview.png"
import isarel from "../assets/img/Copy of Collabratec - Platinum level.png"
import srilanka from "../assets/img/Fort Worth- bronze level.png"

export const Advertisment = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h1><b>Our Proud Sponsors</b></h1>
                      <p style={{fontSize:'20px'}}>Thank you to all our Sections Congress Sponsors!</p>
                        <h3 style={{fontSize:'32px'}}><b>Diamond Sponsors</b></h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' ,paddingTop:'40px',paddingBottom:'25px'}}>
  <img 
    src={canada} 
    style={{ height: '150px', width: '225px',  borderRadius: '20px' }}
    alt="Shaw Centre, Ottawa, Canada" 
    className="animate__animated animate__fadeIn"
  />
  <img 
    src={russia} 
    style={{ height: '150px', width: '225px',  borderRadius: '20px' }}
    alt="Shaw Centre, Ottawa, Canada" 
    className="animate__animated animate__fadeIn"
  />
  <img 
    src={america} 
    style={{ height: '150px', width: '225px',  borderRadius: '20px' }}
    alt="Shaw Centre, Ottawa, Canada" 
    className="animate__animated animate__fadeIn"
  />
</div>
<h3 style={{fontSize:'32px'}}><b>Platinum Sponsors</b></h3>
<img 
    src={india} 
    style={{ height: '150px', width: '225px',  borderRadius: '20px', paddingTop:'40px',paddingBottom:'25px'}}
    alt="Shaw Centre, Ottawa, Canada" 
    className="animate__animated animate__fadeIn"
  />
<h3 style={{fontSize:'32px'}}><b>Silver Sponsor</b></h3>
<img 
    src={isarel} 
    style={{ height: '150px', width: '240px',  borderRadius: '20px', paddingTop:'40px',paddingBottom:'25px'}}
    alt="Shaw Centre, Ottawa, Canada" 
    className="animate__animated animate__fadeIn"
  />
  <h3 style={{fontSize:'32px'}}><b>Bronze Sponsor</b></h3>
  <img 
    src={srilanka} 
    style={{ height: '150px', width: '225px',  borderRadius: '20px', paddingTop:'40px',paddingBottom:'25px'}}
    alt="Shaw Centre, Ottawa, Canada" 
    className="animate__animated animate__fadeIn"
  />
  <h4><b>See You At the next IEEE Sections Congress in 2026</b></h4>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background decoration" />
    </section>
  )
}
