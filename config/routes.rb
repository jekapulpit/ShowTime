# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :shows
    end
  end

  get 'home/index'
  get 'shows/:id', to: 'home#show', as: 'show'

  devise_for :users
  resources :users
  get 'users/profile', as: 'user_root'

  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
