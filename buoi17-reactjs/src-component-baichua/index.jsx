import React, { Component } from "react";

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      hair: "black",
    };
  }

  componentDidMount() {
    //Nó xem những dl thay đổi sau khi render
    //Thay đổi tóc
    console.log("gia tri khoi tao ntn", this.state.date, this.state.hair); //Nhin xem no ntn
    //Action: nhuom toc den => vang
    // this.setState({
    //   date: new Date(),
    //   hair: "yellow",
    // });
    // this.timeId = setInterval(() => this.updateTime(), 1000);
  }
  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("time id", this.timeId);
    clearInterval(this.timeId);
    console.log("component will remove out dom");
  }

  updateTime() {
    this.setState({
      date: new Date(),
    });
    // clearInterval(this.timeId);
  }

  render() {
    console.log("Render element");
    return (
      <div>
        <div>hello reactjs</div>
        <span>{this.state.date.toLocaleTimeString()}</span>
        <br />
        <span>mau toc la {this.state.hair}</span>
      </div>
    );
  }
}

export default Container;

/*
- demo lifecycle
- Mounting: contructer, render => gắn element vào trong dom, dữ liệu, state => componentDidMount



*/
