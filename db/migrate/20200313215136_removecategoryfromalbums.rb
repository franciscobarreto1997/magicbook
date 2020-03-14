class Removecategoryfromalbums < ActiveRecord::Migration[6.0]
  def change
    remove_column :albums, :category, :string
  end
end
