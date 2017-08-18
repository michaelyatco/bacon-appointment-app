class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.datetime :post_time
      t.string :company
      t.text :description
      t.decimal :price
      t.integer :rating
      t.float :lat
      t.float :long

      t.timestamps
    end
  end
end
