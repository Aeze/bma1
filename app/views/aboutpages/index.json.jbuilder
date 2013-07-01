json.array!(@aboutpages) do |ap|
  json.extract! ap, :title, :content
end