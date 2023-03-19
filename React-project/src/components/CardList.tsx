/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import React, { Component } from 'react';
import './CardList.css';

interface Card {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface State {
  cards: Card[];
}

class CardList extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    fetch('data.json')
      .then((response) => response.json())

      .then((cards) => this.setState({ cards }));
  }

  render() {
    return (
      <div className="cards">
        {this.state.cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />

            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
