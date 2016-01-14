# Verhoef Electric

## To develop this site:

- Clone the repository: `git clone git@github.com:ericroberts/vhe.git`
- `bundle`
- Run the server: `middleman server`

## To setup deploy (one time only):

- `mkdir build` - if the build folder exists already, remove it
- `cd build`
- `git init`
- `git remote add origin git@github.com:ericroberts/vhe.git`
- `git fetch`
- `git checkout gh-pages`

## To deploy:

- `middleman build`
- `cd build`
- `git add .`
- `git commit -m "Build [DATE]"`
- `git push origin gh-pages`

## To add a new page

- open `config.rb` and add a proxy line for the new page. You can copy the examples and change as needed.
- create a `.html.slim` file in `source/` that matches the name of the proxied file in config.rb
