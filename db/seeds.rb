10.times do
  user = User.create!(name: Faker::Name.name, age: rand(1..100))
  10.times do
    user.books.create!(title: Faker::Lorem::sentence(word_count: 5),
                       body: Faker::Lorem::paragraph(sentence_count: 4))
  end
end
