# frozen_string_literal: true

class Api::V1::ShowsController < ApplicationController
  def index
    render json: Show.all
  end
end
