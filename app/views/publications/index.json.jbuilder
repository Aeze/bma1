json.array!(@publications) do |pub|
  json.extract! pub, :citation, :pdf, :pubtype, :id
end