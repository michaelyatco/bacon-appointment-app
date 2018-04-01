var Jobs = React.createClass({
  getInitialState: function() {
    return {
      jobs: this.props.jobs,
      title: 'Generic Job',
      post_time: 'Tomorrow at 9am',
      company: 'Generic Co.',
      description: 'Generic Description',
      price: '000.00'
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  handleFormSubmit: function() {
    var job = {title: this.state.title, post_time: this.state.post_time, company: this.state.company, description: this.state.description, price: this.state.price};
    $.post('/jobs',
            {job: job})
          .done(function(data) {
            this.addNewJob(data);
          }.bind(this));
  },

  addNewJob: function(job) {
    var jobs = React.addons.update(this.state.jobs, { $push: [job]});
    this.setState({
      jobs: jobs.sort(function(a,b){
        return new Date(a.post_time) - new Date(b.post_time);
      })
    });
  },

  updateJobs: function(job) {
    var jobs = this.state.jobs.filter((i) => {return i.id != job.id });
    jobs.push(job);
  },

  render: function() {
    return (
      <div>
        <JobForm input_title={this.state.title}
          input_post_time={this.state.post_time}
          input_company={this.state.company}
          input_description={this.state.description}
          input_price={this.state.price}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit} />
        <JobsList jobs={this.state.jobs}/>
      </div>
    )
  }
});
