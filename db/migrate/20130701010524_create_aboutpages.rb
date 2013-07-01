class CreateAboutpages < ActiveRecord::Migration
  def change
    create_table :aboutpages do |t|
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
