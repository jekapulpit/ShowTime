# frozen_string_literal: true

class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[update]

  def profile; end

  def update
    current_user.update_attributes(user_update_params)
    render json: current_user
  end

  private

  def user_params
    params.require(:user).permit(:password, :email, :avatar, :dateofbirth, :realname, :moreinfo)
  end

  def user_update_params
    params.require(:user).permit(:dateofbirth, :realname, :moreinfo)
  end
end
