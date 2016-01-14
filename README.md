# Verhoef Electric

This is a middleman site. To develop this site:

- Clone the repository: `git clone git@github.com:ericroberts/vhe.git`
- Install Middleman: `gem install middleman`
- Run the server: `middleman server`

To setup deploy (one time only):

- `mkdir build` - if the build folder exists already, remove it
- `cd build`
- `git init`
- `git remote add origin git@github.com:ericroberts/vhe.git`
- `git fetch`
- `git checkout gh-pages`

To deploy:

- `middleman build`
- `cd build`
- `git add .`
- `git commit -m "Build [DATE]"`
- `git push origin gh-pages`
