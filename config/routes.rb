Rails.application.routes.draw do
  devise_for :users
  resources :users
  get 'users/profile', as: 'user_root'

  root 'users#profile'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
