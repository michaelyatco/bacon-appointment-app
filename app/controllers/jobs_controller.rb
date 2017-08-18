class JobsController < ApplicationController
  def index
    @jobs = Job.order('post_time ASC')
    @job = Job.new
  end

  def create
    @job = Job.new(job_params)

    if @job.save
      render json: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  private
  def job_params
    params.require(:job).permit(:title, :post_time, :company, :description, :price)
  end
end
