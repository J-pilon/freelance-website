# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  resource :case_studies, only: [] do
    get 'aspire', on: :member, to: 'case_studies#aspire', as: :aspire
    get 'wecasa', on: :member, to: 'case_studies#wecasa', as: :wecasa
  end
end
