import React from "react";

class MenuToggle extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <button id="menu-toggle" id={id}>
        <div className="menu-icon">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </button>
    );
  }
}

export default MenuToggle;
