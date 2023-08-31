const options = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-28/',
  headers: {
    authorization: '422b5d5f-9eba-4d80-aea6-bb78210d1ac5',
    'Content-Type': 'application/json',
  }
}
function isOk(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
function touchServer(options, method, url) {
  return fetch(`${options.baseUrl}${url}`, {
    method: method,
    headers: options.headers
  })
}

function touchServerWithBody(options, method, url, body) {
  return fetch(`${options.baseUrl}${url}`, {
    method: method,
    headers: options.headers,
  
    body: JSON.stringify(body)
  })
}
export function getProfile() {
  return touchServer(options, 'GET', 'users/me')
    .then(isOk)
}

export function getCards() {
  return touchServer(options, 'GET', 'cards')
    .then(isOk)
}

export function editProfile(body) {
  return touchServerWithBody(options, 'PATCH', 'users/me', body)
    .then(isOk)
}

export function addCardServer(body) {
  return touchServerWithBody(options, 'POST', 'cards', body)
    .then(isOk)
}

export function deleteCard(id) {
  return touchServer(options, 'DELETE', `cards/${id}`)
    .then(isOk)
}

export function addLike(id) {
  return touchServer(options, 'PUT', `cards/likes/${id}`)
    .then(isOk)
}

export function delLike(id) {
  return touchServer(options, 'DELETE', `cards/likes/${id}`)
    .then(isOk)
}
export function changeAvatar(body) {
  return touchServerWithBody(options, 'PATCH', 'users/me/avatar', body)
  .then(isOk)
}


