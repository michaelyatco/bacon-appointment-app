var Jobs = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.jobs.map(function(job) {
          return (
          <div>
            <h3>{job.title}</h3>
            <p>{job.post_time}</p>
            <p>{job.company}</p>
            <p>{job.description}</p>
            <p>{job.price}</p>
          </div>
          )
        })}
      </div>
    )
  }
});
