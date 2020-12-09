module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :age, Integer, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    # ここから記述
    field :books, [Types::BookType], null: false
    field :books_object_count, Integer, null: false

    # ユーザーに紐づけられたBookオブジェクトの数を数える
    def books_object_count
      object.books.count
    end
  end
end
