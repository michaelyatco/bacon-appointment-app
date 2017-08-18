var Jobs = React.createClass({
  render: function() {
    return (
      <div>
        <JobForm />
        {this.props.jobs.map(function(job) {
          return (
            <Job job={job} />
          )
        })}
      </div>
    )
  }
});
