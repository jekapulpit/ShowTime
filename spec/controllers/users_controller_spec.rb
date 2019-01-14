# frozen_string_literal: true

require 'rails_helper'
RSpec.describe UsersController, type: :controller do
  describe 'GET #profile' do
    subject { get :profile }
    context 'when not authorised' do
      it { should redirect_to new_user_session_path }
    end
    context 'when authorised' do
      it 'authorising user and going to the profile' do
        sign_in create_confirmed_user
        should be_success
      end
    end
  end
end
