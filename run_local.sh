sudo kill -9 $(pgrep node)
sudo kill -9 $(pgrep grunt)
sudo kill -9 $(pgrep Xvfb)

# required for headless chrome
Xvfb :99 -ac &
export DISPLAY=':99'


cp src/config/local.txt src/app/config.js
bower install
node server.js > node.log &
grunt watch
