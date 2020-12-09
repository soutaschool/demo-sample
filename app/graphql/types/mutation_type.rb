module Types
  class MutationType < Types::BaseObject
    # ここを記述
    field :create_user, mutation: Mutations::CreateUser
  end
end
