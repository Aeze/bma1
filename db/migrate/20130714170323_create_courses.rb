class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.text :content
      t.string :link

      t.timestamps
    end
  end
end
