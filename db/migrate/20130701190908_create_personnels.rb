class CreatePersonnels < ActiveRecord::Migration
  def change
    create_table :personnels do |t|
      t.string :personneltype
      t.string :name
      t.string :picture
      t.string :title
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
