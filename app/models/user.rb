class User < ApplicationRecord
  # 以下を記述
  has_many :books
end
