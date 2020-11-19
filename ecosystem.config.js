/*
 * @Author: Innei
 * @Date: 2020-04-26 11:53:46
 * @LastEditTime: 2020-10-17 22:33:02
 * @LastEditors: Innei
 * @FilePath: /web/ecosystem.config.js
 * @MIT
 */

module.exports = {
  apps: [
    {
      name: 'nai-react',
      script: 'yarn run next start -p 3333',

      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '180M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
