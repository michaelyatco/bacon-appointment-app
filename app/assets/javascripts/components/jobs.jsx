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

  render: function() {
    return (
      <div>
        <JobForm input_title={this.state.title}
          input_post_time={this.state.post_time}
          input_company={this.state.company}
          input_description={this.state.description}
          input_price={this.state.price}
          onUserInput={this.handleUserInput} />
        <JobsList jobs={this.state.jobs}/>
      </div>
    )
  }
});
