class CreatePublications < ActiveRecord::Migration
  def change
    create_table :publications do |t|
      t.string :pdf
      t.text :citation
      t.string :pubtype

      t.timestamps
    end
  end
end
