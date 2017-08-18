var JobsList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.jobs.map(function(obj) {
          return (
            <Job job={job} key={job.id} />
          )
        })}
      </div>
    )
  }
});
