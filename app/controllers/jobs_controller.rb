class JobsController < ApplicationController
  def index
    @jobs = Job.order('post_time ASC')
    @job = Job.new
  end

  def create
    @job = Job.create(job_params)
    @jobs = Job.order('post_time ASC')
  end

  private
  def job_params
    params.require(:job).permit(:title, :post_time, :company, :description, :price)
  end
end
