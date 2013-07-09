class PersonnelsController < ApplicationController
  def index
    @personnels = Personnel.all
  end

  def create
    @personnel = Personnel.new(personnel_params)
    @personnel.save
    redirect_to root_url

  end

  def update
    @personnel = Personnel.find(params[:id])
    @personnel.update(personnel_params)
    redirect_to personnels_path
  end

  def destroy
    @personnel = Personnel.find(params[:id])
    @personnel.destroy
    redirect_to personnels_path
  end


  def personnel_params
    params.require(:personnel).permit(:title, :email, :phone, :picture, :name, :personneltype)
  end
end
