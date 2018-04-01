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

  def update
    job = Job.find(params["id"])
    job.update_attributes(job_params)
    respond_with job, json: job
  end

  def destroy
    respond_with Job.destroy(params)
  end

  private

  def job_params
    params.require(:job).permit(:title, :post_time, :company, :description, :price)
  end
end
