class PublicationsController < ApplicationController
  def index
    @publications = Publication.all
  end

  def create
    @publication = Publication.new(publication_params)
    @publication.save
    redirect_to root_url

  end

  def update
    @publication = Publication.find(params[:id])
    @publication.update(publication_params)
    redirect_to publications_path
  end


  def publication_params
    params.require(:publication).permit(:content, :pdf, :pubtype)
  end
end
