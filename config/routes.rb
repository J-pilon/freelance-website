# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  resource :case_studies, only: [] do
    get 'aspire', on: :member, to: 'case_studies#aspire', as: :aspire
    get 'wecasa', on: :member, to: 'case_studies#wecasa', as: :wecasa
    get 'biohub-platform', on: :member, to: 'case_studies#biohub_platform', as: :biohub_platform
  end

  get '/services/mvp-development',             to: 'services#mvp_development',            as: :mvp_development
  get '/services/startup-product-development', to: 'services#startup_product_development', as: :startup_product_development
  get '/services/mobile-development',          to: 'services#mobile_development',          as: :mobile_development
  get '/services/prototype-to-production',     to: 'services#prototype_to_production',    as: :prototype_to_production
  get '/services/ai-automation-for-startups',  to: 'services#ai_automation',              as: :ai_automation

  get '/blog', to: 'blog#index', as: :blog
end
