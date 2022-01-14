import React from "react";
class PureComponent extends React.PureComponent {
  render() {
    return <div style={{ backgroundColor: "red" }}>It is Pure Component</div>;
  }
}

export default PureComponent;
