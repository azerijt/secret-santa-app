class Group < ApplicationRecord
    has_many :people, dependent: :destroy

end
