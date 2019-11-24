import React,{Component} from 'react';
import {Container,Col,Row} from 'reactstrap';
import Star from '../star';
import about_img from '../../img/about_us.png';


const ti_style={
  color:"green",
  paddingTop:"7%",
  paddingBottom:"2%"

};

const restra_name_style={
  color:"green",
  paddingTop:"5%"
};

export default class Column extends Component{
    render(){
        return(
            <React.Fragment>
            <Container>
                <Row className="col-lg-12 text-center">
                    <Col style={ti_style}>
                    <ColumnHeading  heading="Meet some of our Restaurants"/>
                    <br></br>
                    </Col>
                </Row>
                   <Row>
                        <div className="col-lg-4 col-md-4">
                            <div className="shadow-box-fill">
                                <div className="icom-section text-center">
                                    <ColumnData img_link="" alt="rocco" name="Cafe Pizzerio" body="The best cafe... For any celebration, Just for fun, Want to make new memories, Chill out Or want to hang out with friends this cafe is just PERFECT... "></ColumnData>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="shadow-box-fill">
                                <div className="icom-section text-center">
                                    <ColumnData img_link=""  alt="rocco" name="Janjira Pure Veg" body="This is one of the best pure veg restaurant in this location. The food taste is also very good and the price is also nominal.."></ColumnData>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="shadow-box-fill">
                                <div className="icom-section text-center">
                                    <ColumnData img_link=""  alt="rocco" name="Tirthankar Bhel & Snacks" body="A small family run snacks center... Good place for morning breakfast and evening snacks..  They mainly serve maharashtrian snacks on their menu.."></ColumnData>
                                </div>
                            </div>
                        </div>

                    </Row>
            </Container>
            </React.Fragment>
        )
    }
}
const heading_style={
    paddingBootom:"10px"
}
class ColumnHeading extends Component{
    render(){
        return(

                    <h1 style={heading_style} className="g-header-text">{this.props.heading}</h1>

        )
    }

}

class ColumnData extends Component{
    render(){
        return(
            <React.Fragment>
                                <img className="g-user-avatar g-user-avatar-large" class="rounded-circle " alt="col_about" src={this.props.img_link}/>
                                <h3 style={restra_name_style} class="">{this.props.name}</h3>
                                <p>{this.props.body}</p>
                                <Star/>
                                <br></br>
                                <br></br>
                                <br></br>
            </React.Fragment>
        )
    }

}
