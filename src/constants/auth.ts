export const AUTH_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
} as const;

export const ROLES = {
  STUDENT: "student",
  INTERN: "intern",
  ADMIN: "admin",
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];
