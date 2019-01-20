# frozen_string_literal: true

class AddUserInformation < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :realname, :string
    add_column :users, :dateofbirth, :date
    add_column :users, :moreinfo, :text
  end
end
