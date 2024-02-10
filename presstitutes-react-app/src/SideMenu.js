import React from "react";

class SideMenu extends React.Component {
  render() {
    const { classname } = this.props;
    return (
      <div id="side-menu" className="side-menu" classname={classname}>
        {}
      </div>
    );
  }
}

export default SideMenu;
