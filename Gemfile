source 'https://rubygems.org'

ruby '2.2.4'
gem 'rails', '4.2.6'

gem 'sass-rails', '~> 5.0'     # Use SCSS for stylesheets
gem 'uglifier', '>= 1.3.0'     # Compressor for JavaScript assets
gem 'coffee-rails', '~> 4.1.0' # For .coffee assets and views
gem 'jquery-rails'             # The JavaScript library
gem 'bootstrap-sass'           #  bootstrap library for styles
gem 'font-awesome-sass'        # A Library for icons

# App specific gems (boxroom)
gem 'dynamic_form'
gem 'acts_as_tree'
gem 'paperclip'
gem 'jquery-fileupload-rails'

# App specific gems (markdown.design)
gem 'aws-sdk-v1' # For AWS S3 service If paperclip <= v4.3.1
gem 'redcarpet', '~> 2.1.1' # for markdown support, not 'reverse_markdown'
gem 'coderay', '~> 1.0.7'   # for markdown support

group :production do
  gem 'pg'             # Use postgresql as the database
  gem 'rails_12factor' 
  gem 'newrelic_rpm'   # to keep app awake
  gem 'puma'           # the server, replaced 'unicorn'
  gem 'rack-timeout'   # needed by puma server
end

group :development, :test do
  gem 'sqlite3'  # Use sqlite3 as the database for Active Record
  gem 'spring'   # speeds up dev by keeping your app running in the bg.
  gem 'web-console', '~> 2.0' # Access an IRB console on exception pages or by using <%= console %> in views
  # gem 'byebug' # Call 'byebug' to stop execution and debug to console
  # gem 'capistrano-rails'
end

# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# gem 'factory_girl_rails', group: :test # (boxroom)

# gem 'jbuilder', '~> 2.0'   # Build JSON APIs with ease
# gem 'bcrypt', '~> 3.1.7'   # Use ActiveModel has_secure_password
# gem 'turbolinks'           # Makes links in your web app faster
# gem 'devise'               # Use devise for user auth
# gem 'figaro'               # Use figaro to hide secret keys
# gem 'sprockets-rails', '2.3.3'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# equivalent for secrets.yml of that Figaro
# gem 'heroku_secrets', github: 'alexpeattie/heroku_secrets'  # rake heroku:secrets RAILS_ENV=production

