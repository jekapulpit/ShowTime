# frozen_string_literal: true

FactoryGirl.define do
  factory :show do
    sequence(:title) { |n| "Show ##{n}" }
    description 'My Favorite Show!'
  end
end
