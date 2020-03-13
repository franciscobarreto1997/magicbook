class AddCategoryToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_reference :albums, :category, null: false, foreign_key: true
  end
end
