class AddForeignKeyToPerson < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :people, :groups
  end
end
