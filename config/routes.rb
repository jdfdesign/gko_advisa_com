GkoAdvisaCom::Application.routes.draw do
  resources :contacts, :to => 'contacts#create', :only => :create
end
