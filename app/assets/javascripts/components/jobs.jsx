var Jobs = React.createClass({
  render: function() {
    return (
      <div>
        <JobForm />
        <JobsList jobs={this.props.jobs}/>
      </div>
    )
  }
});
