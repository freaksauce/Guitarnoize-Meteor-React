Layout = React.createClass({
  render() {
    return (
      <div className="container">
        <header>
          <div className="logo-home"><img className="image-responsive" src="/GN_logo.svg" /></div>
        </header>
        <main className="">
            {this.props.content}
        </main>
      </div>
    );
  }
});
