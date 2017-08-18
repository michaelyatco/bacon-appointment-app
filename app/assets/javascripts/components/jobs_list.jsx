var JobsList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.jobs.map(function(job) {
          return (
            <Job job={job} />
          )
        })}
      </div>
    )
  }
});
