# Dockerfile
FROM ruby:3.1.0

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev postgresql-client curl

# Install Node.js and Yarn with version checks
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs \
  && npm install -g yarn \
  && node -v \
  && npm -v \
  && yarn -v

RUN groupadd -r app && useradd -r -g app app

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN bundle config set --local path 'vendor/bundle' \
  && bundle install --verbose

COPY . .

RUN chown -R app:app /app

USER app

RUN yarn install --check-files

# Precompile assets (if necessary)
ARG RAILS_MASTER_KEY
ENV RAILS_MASTER_KEY=${RAILS_MASTER_KEY}
RUN RAILS_ENV=production bundle exec rake assets:precompile

EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]