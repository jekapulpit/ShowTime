# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::ShowsController, type: :controller do
  before { sign_in(create_confirmed_user) }
  let(:shows) { create_list(:shows, 2) }

  describe "GET shows#show" do
    it "should render json with show params" do
    end
  end

  describe "GET shows#index" do
    it "should render 2 shows" do
    end
  end

  describe "GET shows#create" do
    it "should add show in the database" do
    end

    it "should render json with new show" do
    end
  end

  describe "GET shows#update" do
    it "should update show in the database" do
    end

    it "should render json with edited show" do
    end
  end

end
