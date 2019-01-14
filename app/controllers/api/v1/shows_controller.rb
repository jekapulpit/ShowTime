# frozen_string_literal: true

class Api::V1::ShowsController < ApplicationController
  def index
    render json: Show.all
  end

  def show
    show = Show.find(params[:id])
    render json: show
  end

  def create
    show = Show.create(show_params)
    render json: show
  end

  def destroy
    Show.destroy(params[:id])
  end

  def update
    show = Show.find(params[:id])
    show.update_attributes(show_params)
    render json: show
  end

  private

  def show_params
    params.require(:show).permit(:name, :description)
  end
end
