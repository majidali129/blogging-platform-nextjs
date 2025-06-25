export const signUpPath = "/auth/sign-up";
export const signUpWithEmailPath = "/auth/sign-up/with-email";
export const signInPath = "/auth/sign-in";
export const homePath = "/";
export const postDetailsPath = (userName: string, id: string, title?: string) =>
  `/${userName}/${id}/${title}`;
export const dashboardPath = "/dashboard";
export const settingsPath = "/settings";
export const profilePath = "/settings/profile";
export const accountSettingsPath = "/settings/account";
export const createPostPath = "/new";
export const readingListPath = "/reading-list";
export const tagsPath = "/tags";
export const aboutPath = "/about";

export const accountStatsPath = (userName: string, id: string) =>
  `/profile/${userName}_${id}`;
