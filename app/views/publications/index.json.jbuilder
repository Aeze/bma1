json.array!(@publications) do |pub|
  json.extract! per, :citation, :pdf, :pubtype, :id
end