json.array!(@movies) do |movie|
	json.title movie.title
	json.url movie_path(movie)
end