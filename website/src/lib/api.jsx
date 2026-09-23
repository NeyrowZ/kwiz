export const api = {
  get: (path) => fetch(`/api${path}`).then(r => r.json()),
  post: (path, body) => fetch(`/api${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(r => r.json())
};