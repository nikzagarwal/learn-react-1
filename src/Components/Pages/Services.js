import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';
import SingeService from '../Common/SingleService.js'

const services=[
{title: 'E-Commerce',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',icon:'fa-shopping-cart'},
{title: 'Responsive Design',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',icon:'fa-laptop'},
{title: 'Web Security',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',icon:'fa-lock'}


];
class Service extends Component {
    render() {
        return (
            <div>
                <div >
                    <Header
                        title="Welcome To Our Studio!"
                        subtitle="IT'S NICE TO MEET YOU"
                        buttonText="Tell ME"
                        link="/services"
                        showButton={true}
                        image={image}
                    />
                </div>

                <section className="page-section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Services</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            {services.map((service,index)=>{
                                return <SingeService {...service} key={index}/>
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Service;