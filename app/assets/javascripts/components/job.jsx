var Job = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.job.title}</h3>
        <p>{job.post_time}</p>
        <p>{job.company}</p>
        <p>{job.description}</p>
        <p>{job.price}</p>
      </div>
    )
  }
});
