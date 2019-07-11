import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsut, error cumque molestias at iure aperiam iusto accusantium. Autem temporibus libero ex ipsum quas provident eum, eius officia?"
            },
            {
                icon:<FaHiking />,
                title: "Endless hiking",
                info: "Lorem ipsut, error cumque molestias at iure aperiam iusto accusantium. Autem temporibus libero ex ipsum quas provident eum, eius officia?"
            },
            {
                icon:<FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsut, error cumque molestias at iure aperiam iusto accusantium. Autem temporibus libero ex ipsum quas provident eum, eius officia?"
            },
            {
                icon:<FaBeer />,
                title: "Strongest beer",
                info: "Lorem ipsut, error cumque molestias at iure aperiam iusto accusantium. Autem temporibus libero ex ipsum quas provident eum, eius officia?"
            }
        ]
    }
  render() {
    return (
      <section className="services">
       <Title title="services" />
       <div className="services-center">
       {this.state.services.map((item,index) => {
           return <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
           </article>
       })}
       </div>
      </section>
    )
  }
}
