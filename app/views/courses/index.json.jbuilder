json.array!(@courses) do |course|
  json.extract! course, :title, :content, :link
  json.url course_url(course, format: :json)
end
