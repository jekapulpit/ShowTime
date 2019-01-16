# frozen_string_literal: true

class Show < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  has_one_attached :picture
end
