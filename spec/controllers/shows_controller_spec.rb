# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::ShowsController, type: :controller do
  before { sign_in(create_confirmed_user) }
  let(:show) { FactoryGirl.create(:show) }

  describe 'POST shows#create' do
    it 'should add show in the database and render json' do
      post 'create', params: { show: { title: 'fddsfdsf', description: 'fdsfdsfdsf' } }
      expect(response.content_type).to eq('application/json')
      expect(response.body).to have_json_path('id')
      expect(Show.last.title).to eq('fddsfdsf')
    end
  end

  describe 'get shows#show' do
    it 'should render json' do
      get 'show', params: { id: show.id }
      expect(response.content_type).to eq('application/json')
      expect(response.body).to have_json_path('id')
    end
  end

  describe 'GET shows#index' do
    it 'should render 2 shows in json format' do
      FactoryGirl.create_list(:show, 2)
      get 'index'
      expect(response.content_type).to eq('application/json')
      expect(response.body).to have_json_size(2)
    end
  end

  describe 'POST shows#update' do
    it 'should update show in the database and render json' do
      post 'update', params: { id: show.id, show: { title: 'new_title', description: 'fdsfdsfdsf' } }
      expect(response.content_type).to eq('application/json')
      expect(response.body).to have_json_path('id')
      expect(Show.find(show.id).title).to eq('new_title')
    end
  end

  describe 'POST shows#destroy' do
    it 'should delete show in the database' do
      post 'destroy', params: { id: show.id }
      expect(Show.find_by(id: show.id)).to eq(nil)
    end
  end
end
