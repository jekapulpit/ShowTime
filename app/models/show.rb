class Show < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
end
