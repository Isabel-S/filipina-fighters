import React, { Component } from 'react';

class BulletPoints extends Component {
  render() {
    const { items } = this.props; // Assuming 'items' is the prop name for the bullet points list

    return (
      <ul className="normal">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default BulletPoints;