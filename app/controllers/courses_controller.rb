class CoursesController < ApplicationController
  def index
    @courses = Course.all
  end

  def create
    @course = Course.new(course_params)
    @course.save
    redirect_to root_url

  end

  def update
    @course = Course.find(params[:id])
    @course.update(course_params)
    redirect_to courses_path
  end

  def destroy
    @course = Course.find(params[:id])
    @course.destroy
    redirect_to courses_path
  end


  def course_params
    params.require(:course).permit(:title, :content, :link)
  end
end
