class Level < ApplicationRecord
  # has_many :tiles, through: :games
  has_many :games, through: :tiles
  has_many :tiles
  belongs_to :game
end