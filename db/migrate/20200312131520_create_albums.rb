class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.string :description
      t.integer :price
      t.string :category
      t.string :size

      t.timestamps
    end
  end
end
