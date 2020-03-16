class AlbumsController < ApplicationController
    protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token

  def index
    @category = Category.where(name: params[:name])
    @albums = Album.where(category_id: @category.first)
    albums_arr = []
    @albums.each do |album|
      albums_arr << album
    end
    render json: albums_arr
  end

  def show
    @album = Album.find(params[:id])
    @category = Category.where(id: @album.category_id).first
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
