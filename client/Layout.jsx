Layout = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <main>
            {this.props.content}
          </main>
        </div>
      </div>
    );
  }
});
