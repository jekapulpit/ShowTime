class ChangeColumnNameInShow < ActiveRecord::Migration[5.2]
  def change
    rename_column :shows, :discription, :description
  end
end
