import 'animate.css';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import canada from "../assets/img/shaw-centre-at-night-with-parliament.webp";

export const About = () => {
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
                        <h2>Sections Congress 2024</h2>
                        <p>IEEE Sections Congress, the triennial flagship event hosted by MGA, brings together volunteer leaders from every member country to share ideas and solutions.
                          <hr/>Volunteer leaders from around the world met in the Shaw Centre, Ottawa, Canada from 11-13 August 2023, to exchange ideas and learn about the products and programs IEEE offers to members in their local areas.
                        </p>
                        <p>Thank you for joining Sections Congress 2023 in Ottawa, Canada. We are pleased to share with you key takeaways from this year’s Congress!
                          <br/>
                          1,096 attendees <br/>
                          303 sections represented <br/>
                          95 countries represented <br/>
                          97 speakers, 101 topics <br/>
                          You can find this year's presentations on the CLE.
                        </p>
                        <img 
                          src={canada} 
                          style={{ height: '480px', width: '720px', border: '12px solid grey',borderRadius:'20px' }}
                          alt="Shaw Centre, Ottawa, Canada" 
                          className="animate__animated animate__fadeIn"
                        />
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background decoration" />
    </section>
  )
}
