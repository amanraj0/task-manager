const ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
  VIEWER: 'viewer'
};

const ALLOWED_ROLES = Object.values(ROLES); // ['admin', 'manager', 'user', 'viewer']

export default{
  ALLOWED_ROLES,
  ROLES,
} 