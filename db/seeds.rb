# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Album.destroy_all
Category.destroy_all

Category.create!(name: "Verticais")
Category.create!(name: "Quadrados")
Category.create!(name: "Horizontais")

Album.create!(description: "nice album", price: 15.85, category_id: Category.second.id, size: "15x15")
Album.create!(description: "nice album", price: 20.00, category_id: Category.first.id, size: "15x20")
Album.create!(description: "nice album", price: 20.00, category_id: Category.third.id, size: "20x15")
Album.create!(description: "nice album", price: 27.48, category_id: Category.second.id, size: "20x20")
Album.create!(description: "nice album", price: 29.10, category_id: Category.first.id, size: "18x25")
Album.create!(description: "nice album", price: 29.10, category_id: Category.third.id, size: "25x18")
Album.create!(description: "nice album", price: 36.26, category_id: Category.first.id, size: "20x30")
Album.create!(description: "nice album", price: 36.26, category_id: Category.third.id, size: "30x20")
Album.create!(description: "nice album", price: 60.98, category_id: Category.third.id, size: "30x25")
Album.create!(description: "nice album", price: 60.98, category_id: Category.first.id, size: "25x30")
Album.create!(description: "nice album", price: 76.42, category_id: Category.second.id, size: "30x30")
Album.create!(description: "nice album", price: 27.00, category_id: Category.first.id, size: "30x40")
Album.create!(description: "nice album", price: 28.00, category_id: Category.third.id, size: "40x30")














