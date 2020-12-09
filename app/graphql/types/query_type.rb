module Types
  class QueryType < Types::BaseObject
    # 全てのデータの取得
    field :users, [Types::UserType], null: false
    def users
      User.all
    end

    # 引数の番号のデータを取得
    field :user, Types::UserType, null: false do
      argument :id, ID, required: true
    end
    def user(id:)
      User.find(id)
    end
  end
end
