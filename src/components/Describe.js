import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { DescribeCard } from "./DescribeCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import president from '../assets/img/president.webp';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import hodeee from "../assets/img/Screenshot 2024-07-30 003426.png"
import guest from "../assets/img/Screenshot 2024-07-30 003817.png"
import director from "../assets/img/Screenshot 2024-07-30 004039.png"
export const Describe = () => {
  const projects = [
    {
      title: "Director",
      description: "The IEEE conference offers a platform for academics, engineers, and industry professionals to present cutting-edge research, exchange ideas, and foster collaborations. Attendees benefit from keynote speeches, technical sessions, and networking opportunities, driving innovation and technological advancements across various fields.",
      imgUrl:director
    },
    {
      title: "Cheif Guest",
      description: "The IEEE conference offers a platform for academics, engineers, and industry professionals to present cutting-edge research, exchange ideas, and foster collaborations. Attendees benefit from keynote speeches, technical sessions, and networking opportunities, driving innovation and technological advancements across various fields.",
       imgUrl:guest
    },
    {
      title: "HoD,EEE",
      description: "The IEEE conference offers a platform for academics, engineers, and industry professionals to present cutting-edge research, exchange ideas, and foster collaborations. Attendees benefit from keynote speeches, technical sessions, and networking opportunities, driving innovation and technological advancements across various fields.",
      imgUrl:hodeee
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>A Message from President Rahman</h2>
                <div style={{ textAlign: 'center' }}>
                  <img src={president} alt="President Rahman" style={{ height: '350px', width: '250px',paddingTop:'40px',paddingBottom:'40px' }} />
                </div>
                <p>I hope everyone had a successful and enjoyable time at IEEE Sections Congress 2023, which aims to bring together Section leadership from all 10 Regions to network, learn, and collectively shape the future of IEEE. This year’s theme, “Enabling Leaders to Build a Sustainable Future” recognizes the global crisis of climate change, as well as IEEE’s commitment to helping alleviate the effects through pragmatic, accessible technical solutions for sustainability, and providing engineers and technologists with a neutral space for discussion and action. I believe IEEE’s impact starts at the local level, beginning with building awareness of the multitude of resources that membership provides. With more than 340 sections around the world, local engineers, technologists, and computer scientists can deliver technology solutions for their unique communities.</p>
                <p>Linked in this communication is a deck on IEEE Climate Change Engagement Opportunities, which includes information on how IEEE is addressing climate change, as well as technology solutions available from IEEE, and can serve as a blueprint for members’ action plan. I encourage you to share this information widely with local members and your colleagues. Thank you again for your dedication to IEEE and your commitment to advancing our mission, both locally and around the world.</p>
                <p>Regards,
<br></br>
Saifur Rahman
<br></br>
2024 IEEE President and CEO</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Organizers say</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Recommendations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Info</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <DescribeCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>#9 Provide continuing incentives to volunteers: IEEE needs to provide more incentives to increase the number of volunteers. These incentives would contribute to recognizing volunteers’ value and time investment. Incentive examples: IEEE to send letters to employers recognizing their employees' service to the profession, IEEE to provide free membership for the years of volunteer service, IEEE to provide a plaque stating the IEEE years of service, IEEE Badge for LinkedIn profile, IEEE to provide a swag bag with IEEE items.
                        <hr></hr>
                        #29 Continuous Education in the IEEE professional field: Partner with other professional organizations for continuing education. This could include training and courses that lead to credentials such as digital badges, certificates and professional development units or hours. Collaboration with others can promote the IEEE brand and expand the influence of IEEE among professional organizations and their members. Integration and awareness with larger organizations will also serve to benefit IEEE members as credentials receive wider recognition.
                        <hr></hr>
                        #10 Provide support, education, and processes for working with Student Chapters & building relationships with Sections: The exact relationship between student branches, faculty advisors, and sections is unclear. This has led to some student branches that use the IEEE name but have no official affiliation with the IEEE. Furthermore, the path to officially tie these student branches to the IEEE and local sections is unclear.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Thank you for joining Sections Congress 2023 in Ottawa, Canada. We are pleased to share with you key takeaways from this year’s Congress!
                        <br></br>
                        1,096 of attendees
                        <br></br>
                        303 sections represented
                        <br></br>
                        95 countries represented
                        <br></br>
                        97 speakers, 101 topics
                        <br></br>
                        You can find this year's presentations on the CLE.</p>
                        <br></br>
                        <div  style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="videocon">
  <span>View Presentation</span>
  <div className="ray"></div>
</button>
                    </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
