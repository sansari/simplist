class Item < ActiveRecord::Base
  belongs_to :list

  scope :done, -> { where(done: true) }
  scope :active, -> { where(done: false) }
end
