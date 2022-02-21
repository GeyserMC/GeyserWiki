require 'algolia'
require 'json'

APPLICATION_ID = ARGV[0]
API_KEY = ARGV[1]

puts "Building client..."

client = Algolia::Search::Client.create(APPLICATION_ID, API_KEY)
index = client.init_index('geyserwiki')

puts "Building jekyll..."

# Build the site
#`bundle exec jekyll build` Actions does this for us

# Grab the data.json
# @type [Array<Hash>]
data = JSON.parse(File.read('_site/search/data.json'))

#puts "Data is #{data}"
puts "Data is #{data.length}"

# Remove any data that url does not start with /floodgate, /geyser, or /other
data = data.delete_if { |d| !d['url'].start_with?('/floodgate', '/geyser', '/other') }

# Add ObjectID to each data item with the value of the ID
data = data.map do |d|
  d['objectID'] = d['id']
  d
end

#puts "Data is #{data}"

puts "Saving Objects"

index.save_objects(data)

puts "Done"