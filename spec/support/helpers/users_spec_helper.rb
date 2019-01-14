# frozen_string_literal: true

module UsersSpecHelper
  def create_confirmed_user
    FactoryGirl.create(:user)
  end
end
