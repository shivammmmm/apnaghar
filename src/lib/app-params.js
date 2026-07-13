const getParam = (name, defaultValue) => {
  if (typeof window === 'undefined') return defaultValue;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || defaultValue;
};

export const appParams = {
  appId: getParam('app_id', "6a3cd351d9831a39cb1b5904"),
  token: getParam('access_token', typeof window !== 'undefined' ? localStorage.getItem('base44_access_token') : null),
  fromUrl: getParam('from_url', typeof window !== 'undefined' ? window.location.href : ''),
  functionsVersion: getParam('functions_version', "prod"),
  appBaseUrl: getParam('app_base_url', "https://apna-home-path.base44.app")
};
