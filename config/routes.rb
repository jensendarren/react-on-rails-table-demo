Rails.application.routes.draw do
  root 'dashboard#index'

  resources :events

  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end