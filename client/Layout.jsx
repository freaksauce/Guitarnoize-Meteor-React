Layout = React.createClass({
  render() {
    return (
      <div className="container">
        <header>
          <div className="logo-home"><img className="image-responsive" src="/GN_logo.svg" /></div>
        </header>
        <main className="col-md-8 col-md-offset-2">
            {this.props.content}
        </main>
      </div>
    );
  }
});
