get '/' do
  erb :index
end

post '/urls' do
  # Create a new `Url` object.
  # Redirect back to the homepage.
end

# e.g., /c3por2d2
get '/:short_url' do
  # Redirect to appropriate "long" URL.
end
