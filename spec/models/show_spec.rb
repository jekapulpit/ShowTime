# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Show, type: :model do
  subject do
    described_class.new(title: 'Anything', description: 'Anything')
  end

  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end

  it 'is not valid without a title' do
    subject.title = nil
    expect(subject).to_not be_valid
  end

  it 'is not valid without a description' do
    subject.description = nil
    expect(subject).to_not be_valid
  end
end
