class AboutpagesController < ApplicationController
  def index
    @aboutpages = Aboutpage.all
  end

  def create
    @aboutpage = Aboutpage.create(aboutpage_params)
    redirect_to aboutpages_path
  end

  def update
    @aboutpage = Aboutpage.find(params[:id])
    @aboutpage.update(aboutpage_params)
    redirect_to aboutpages_path
  end


  def aboutpage_params
    params.require(:aboutpage).permit(:title, :content)
  end
end
