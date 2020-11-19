###
# @Author: Innei
# @Date: 2020-05-10 10:35:55
# @LastEditTime: 2020-09-13 18:02:39
# @LastEditors: Innei
# @FilePath: /mx-web/build.sh
# @Copyright
###
#!/bin/sh
export NODE_OPTIONS="--max_old_space_size=512"
git pull
yarn
yarn build
yarn prod:pm2
