class AddGroupToPerson < ActiveRecord::Migration[7.0]
  def change
    add_reference :people, :group
  end
end
