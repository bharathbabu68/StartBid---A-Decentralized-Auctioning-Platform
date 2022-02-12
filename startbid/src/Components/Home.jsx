import { Component } from "react";
import { Container, Row, Col, Card, Button, Dropdown  } from "react-bootstrap";
import Bulb from 'react-bulb';
import { auctions } from "../Resources/auctions";
import {AiFillHeart} from 'react-icons/ai';
import {FaEthereum} from 'react-icons/fa';
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            bulbColor:['#00cc00', '#fafafa' ],
            bulbColorIndex: 0,
            auctionFilter: ['Live', 'Upcoming', 'Ended', 'All'],
            auctionFilterActive: 'Live'
        };
    }
    
    componentDidMount = () => {
        setInterval(async() => {
            await this.setState({bulbColorIndex: (this.state.bulbColorIndex+1)%2});
        }, 600);
    }
    render(){
        
        return(
            <>
            <Container>
                <Row style={{padding:'20px'}}>
                    <Col md={6}>
                    <h1
                    style={{ fontWeight:'bolder'}}
                > Start Bid  </h1>
                    </Col>
                    <Col md={6} style={{textAlign:'right'}}>
                        <Dropdown style={{margin:'10px'}}>
                        <Dropdown.Toggle id="auction-filter"
                            style={{paddingLeft:'20px', paddingRight:'20px', backgroundColor:'#21325E'}}
                        >
                            {this.state.auctionFilterActive}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={async()=>{await this.setState({auctionFilterActive:'All'})}}>All</Dropdown.Item>
                            <Dropdown.Item onClick={async()=>{await this.setState({auctionFilterActive:'Live'})}}>Live</Dropdown.Item>
                            <Dropdown.Item onClick={async()=>{await this.setState({auctionFilterActive:'Upcoming'})}}>Upcoming</Dropdown.Item>
                            <Dropdown.Item onClick={async()=>{await this.setState({auctionFilterActive:'Ended'})}}>Ended</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

                <h4 style={{marginLeft:'20px'}}>{this.state.auctionFilterActive} Auctions</h4> 
                
                <Row>
                    {auctions.map((auction)=>{
                        return(
                            <Col md={4} 
                                style={{padding: '30px'}}>
                                <Card 
                                    style={{borderTop:"1px solid black"}}>
                                        <Card.Img 
                                            style={{height:"270px", objectFit:'cover'}}
                                            src={auction.link}/>
                                        <Row style={{marginTop: '20px'}}>
                                            <Col md={8}>
                                                <h4
                                                style={{paddingLeft:'20px',fontWeight:'bolder'}}
                                            >{auction.title}</h4>
                                            </Col>
                                            <Col md={4} style={{fontSize:'20px'}}>
                                                <AiFillHeart style={{color:'#FFA0A0'}}/>
                                                <span style={{marginLeft:'10px'}}>12 
                                                
                                                </span>
                                            </Col>
                                        </Row> 
                                        <Row style={{padding:'20px'}}>
                                            <Col md={6} style={{}}>
                                                <h5> Current Bid </h5>
                                                <h5 style={{fontWeight:'bolder'}}> 112 ETH 
                                                <FaEthereum style={{color:'#21325E'}}/>
                                                </h5>
                                            </Col>
                                            <Col md={6}>
                                                <h5> Bid Ends In</h5>
                                                <h5 style={{fontWeight:'bolder'}}> 12:07 </h5>
                                            </Col>
                                        </Row>
                                        <Row style={{textAlign:'center', paddingBottom:'20px'}}>
                                            <Col md={6} style={{}}>
                                                
                                                <Button 
                                                    style={{width:'80%', backgroundColor:'#FFA0A0', border:'none', color:'#21325E' }}
                                                    onClick = { () => {
                                                        window.location.replace(`explore/${auction.id}`);
                                                    }}
                                                > Start Bid </Button>
                                                
                                            </Col>
                                            <Col md={6}>
                                                <Button variant='light' style={{width:'80%'}}> View History </Button>
                                            </Col>
                                        </Row>
                                        
                                        
                                        
                                </Card>    
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            </>
        );
    }
}

export default Home;