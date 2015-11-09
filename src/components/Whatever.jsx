const Whatever = React.createClass({
  getInitialState: function () {
    return {seconds: 0, s:'s'};
  },
  componentDidMount: function () {
    var self = this;
    setInterval(function () {
      var st = {
        seconds: self.state.seconds+1,
        s: self.state.seconds+1 == 1 ? '' : 's'
      };
      self.setState(st);
    }, 1000);
  },
  render: function () {
    return (
      <div>{this.state.seconds} second{this.state.s}.</div>
    );
  }
});

ReactDOM.render(
  <Whatever />,
  document.getElementById('example')
);
