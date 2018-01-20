import React from 'react';
import ReactDOM from 'react-dom';


class Tabs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {selectedTab: 0};
  }

  selectTab(idx, e) {

    console.log(e.currentTarget);
    this.setState({selectedTab: idx});
  }

  render() {
    return (
      <div className = "tabs">
        <ul>
        {this.props.tabdata.map((obj,idx) => {

          return <h3 onClick={this.selectTab.bind(this, idx)} key={idx}>{obj.title}</h3>;
        })
      }
      </ul>
      <article>{this.props.tabdata[this.state.selectedTab].content}</article>
    </div>
  );
}

}

export default Tabs;
