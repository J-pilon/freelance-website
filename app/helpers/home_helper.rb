# frozen_string_literal: true

module HomeHelper
  LANGUAGES = [
    { name: 'Ruby on Rails', file: 'icons/rails.jpeg' },
    { name: 'Rspec', file: 'icons/rspec.png' },
    { name: 'Javascript', file: 'icons/javascript.png' },
    { name: 'Typescript', file: 'icons/typescript.png' },
    { name: 'React & React Native', file: 'icons/react.png' },
    { name: 'Swift', file: 'icons/swift.png' },
    { name: 'TailwindCSS', file: 'icons/tailwindcss.png' },
    { name: 'PostgresSQL', file: 'icons/postgresql.png' },
    { name: 'AWS', file: 'icons/aws.png' },
    { name: 'DevOps', file: 'icons/devops.png' },
    { name: 'IOS Development', file: 'icons/ios-development.png' }
  ].freeze

  def languages
    LANGUAGES
  end

  def language_icon(language, **args)
    if asset_exists?(language[:file])
      image_tag(language[:file], alt: "#{language[:name]} icon", **args)
    else
      content_tag(:span, 'Icon not available', class: 'missing-icon')
    end
  end
end
