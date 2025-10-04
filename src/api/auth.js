// src/api/auth.js
// const API_BASE = 'http://localhost:5000';
const API_BASE = 'http://10.7.31.89:5000';

export async function getMe() {
    const token = getCookie('token');
    console.log(token);
    const res = await fetch(`${API_BASE}/api/me`, {
    method: 'GET',
    credentials: 'include'
  });
  return res.json();
}
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
  
  const token = getCookie('token');
  console.log('Token:', token);
export async function logout() {
  await fetch(`${API_BASE}/api/logout`, {
    method: 'POST',
    credentials: 'include'
  });
  window.location.href = '/';
}

// ✅ Accepts role (student/mentor)
export function startGithubLogin(role) {
  const url = role ? `${API_BASE}/api/auth/github?role=${role}` : `${API_BASE}/api/auth/github`;
  window.location.href = url;
}
