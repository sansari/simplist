class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :list_id
      t.string :title
      t.boolean :done

      t.timestamps null: false
    end
  end
end
