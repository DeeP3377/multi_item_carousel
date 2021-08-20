import Carousel from "./components/Carousel/Carousel"
import img1 from "./components/Carousel/testbook.png"
import {Row,Col} from 'react-bootstrap';
const App = () => {
    return (
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 50 }}>
            <Carousel
                show={3}
            >
                <div>
                    <div style={{padding: 8}} className="carddiv">
                        <img src={img1} alt="placeholder" style={{width: '100%'}} />
                        <div>
                            <h2 className="leftday">1 days left</h2>
                        </div>
                        <div>
                            <h2>UPSE Exams</h2>
                        </div>
                        <div>
                            <Row>
                                <Col md-3>150+ Videos</Col>
                                <Col md-3>50+ pdf</Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}} className="carddiv">
                        <img src={img1} alt="placeholder" style={{width: '100%'}} />
                        <div>
                            <h2 className="leftday">2 days left</h2>
                        </div>
                        <div>
                            <h2>Railway Group Exams</h2>
                        </div>
                        <div>
                            <Row>
                                <Col md-3>150+ Videos</Col>
                                <Col md-3>50+ pdf</Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}} className="carddiv">
                        <img src={img1} alt="placeholder" style={{width: '100%'}} />
                        <div>
                            <h2 className="leftday">3 days left</h2>
                        </div>
                        <div>
                            <h2>Railway Group Exams</h2>
                        </div>
                        <div>
                            <Row>
                                <Col md-3>150+ Videos</Col>
                                <Col md-3>50+ pdf</Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}} className="carddiv">
                        <img src={img1} alt="placeholder" style={{width: '100%'}} />
                        <div>
                            <h2 className="leftday">4 days left</h2>
                        </div>
                        <div>
                            <h2>Railway NTPC Exams</h2>
                        </div>
                        <div>
                            <Row>
                                <Col md-3>150+ Videos</Col>
                                <Col md-3>50+ pdf</Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}} className="carddiv">
                        <img src={img1} alt="placeholder" style={{width: '100%'}} />
                        <div>
                            <h2 className="leftday">5 days left</h2>
                        </div>
                        <div>
                            <h2>SSC CHSL Exams</h2>
                        </div>
                        <div>
                            <Row>
                                <Col md-3>150+ Videos</Col>
                                <Col md-3>50+ pdf</Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}} className="carddiv">
                        <img src={img1} alt="placeholder" style={{width: '100%'}} />
                        <div>
                            <h2 className="leftday">6 days left</h2>
                        </div>
                        <div>
                            <h2>SSC CGL Exams</h2>
                        </div>
                        <div>
                            <Row>
                                <Col md-3>150+ Videos</Col>
                                <Col md-3>50+ pdf</Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default App
