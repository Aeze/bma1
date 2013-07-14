json.array!(@news) do |news|
  json.extract! news, :title, :content, :link
  json.url news_url(news, format: :json)
end
