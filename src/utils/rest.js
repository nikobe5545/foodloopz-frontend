export const addCSRFHeader = (xhr) => {
  const csrf = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
  xhr.setRequestHeader('X-CSRFToken', csrf)
}
