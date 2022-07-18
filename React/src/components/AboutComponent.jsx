import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle, Media } from 'reactstrap';

function About(props) {
    const renderContent = (leaders) => (
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className='row row-content'>
                <div class="col-12 col-sm-6">
                    <h2>Our History</h2>
                    <p>
                        Started in 2010, Ristorante con Fusion quickly established
                        itself as a culinary icon par excellence in Hong Kong. With
                        its unique brand of world fusion cuisine that can be found
                        nowhere else, it enjoys patronage from the A-list clientele
                        in Hong Kong. Featuring four of the best three-star
                        Michelin chefs in the world, you never know what will
                        arrive on your plate the next time you visit us.
                    </p>
                    <p>
                        The restaurant traces its humble beginnings to
                        <em>The Frying Pan</em>, a successful chain started by our
                        CEO, Mr. Peter Pan, that featured for the first time the
                        world's best cuisines in a pan.
                    </p>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="card">
                        <h3 class="card-header bg-primary text-white">
                            Facts AtaGlance
                        </h3>
                        <div class="card-body">
                            <dl class="row">
                                <dt class="col-6">Started</dt>
                                <dd class="col-6">3Feb. 2013</dd>
                                <dt class="col-6">Major Stake Holder</dt>
                                <dd class="col-6">HK Fine Foods Inc.</dd>
                                <dt class="col-6">Last Year's Turnover</dt>
                                <dd class="col-6">$1,250,375</dd>
                                <dt class="col-6">Employees</dt>
                                <dd class="col-6">40</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card card-body bg-light">
                        <blockquote class="blockquote">
                            <p class="mb-8">
                                You better cut the pizza in four pieces because I'm
                                not hungry enough to eat six.
                            </p>
                            <footer class="blockquote-footer">
                                Vogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra, P.
                                    Pepe,Diversion Books,2014</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div className='row row-content'>
                <div className='col-12'>
                    <h2>Corporate Leadership</h2>
                </div>
                {renderLeaders(leaders)}
            </div>
        </div>
    )

    const renderLeaders = (leaders) => (leaders.map((leader) => (
        <Media tag="li">
            <Media left middle>
                <Media object src={leader.image} alt={leader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    )))

    return (<>
        {renderContent(props.leaders)}
    </>);
}

export default About;