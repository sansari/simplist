class Item < ActiveRecord::Base
  belongs_to :list

  default_scope { order('id DESC') }

  scope :done, -> { where(done: true) }
  scope :active, -> { where(done: false) }
end
