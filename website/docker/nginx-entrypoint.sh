#!/bin/sh
set -e
HOSTNAME="${HOSTNAME:-unknown}"

cat > /usr/share/nginx/html/instance.js <<EOF
window.__INSTANCE__ = "${HOSTNAME}";
EOF

echo "instance.js written with HOSTNAME=${HOSTNAME}"