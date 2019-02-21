#!/bin/sh
cat <<EOT >> environment.js
window.baseURL = "$BASE_URL"
EOT

nginx -g 'daemon off;'
