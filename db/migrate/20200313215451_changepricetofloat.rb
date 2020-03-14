class Changepricetofloat < ActiveRecord::Migration[6.0]
  def change
    change_column :albums, :price, :float
  end
end
