var Job = React.createClass({
  render: function(){
    return (
      <div className='job'>
        <h3>{this.props.job.title}</h3>
        <p>{formatDate(this.props.job.post_time)}</p>
        <p>{this.props.job.company}</p>
        <p>{this.props.job.description}</p>
        <p>{this.props.job.price}</p>
      </div>
    )
  }
});
