class NewsController < ApplicationController
  def index
    @news = News.all
  end

  def create
    @news = News.new(news_params)
    @news.save
    redirect_to root_url

  end

  def update
    @news = News.find(params[:id])
    @news.update(news_params)
    redirect_to news_path
  end

  def destroy
    @news = News.find(params[:id])
    @news.destroy
    redirect_to news_path
  end


  def news_params
    params.require(:news).permit(:title, :content, :link)
  end
end
