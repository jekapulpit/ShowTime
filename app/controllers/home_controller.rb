# frozen_string_literal: true

class HomeController < ApplicationController
  def index; end

  def show
    @show = Show.find(params[:id])
  end
end
