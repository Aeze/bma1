json.array!(@personnels) do |per|
  json.extract! per, :name, :email, :personneltype, :title, :phone, :picture, :id
end