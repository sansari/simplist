class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :list_id
      t.string :title
      t.boolean :done, :default => false

      t.timestamps null: false
    end
  end
end
