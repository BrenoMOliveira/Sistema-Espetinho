export const rootPaths = {
  homeRoot: '/',
  authRoot: 'authentication',
  errorRoot: 'error',
};

export default {
  home: `/${rootPaths.homeRoot}`,
  vendas: `/${rootPaths.homeRoot}/vendas`,
  estoque: `/${rootPaths.homeRoot}/estoque`,
  produtos: `/${rootPaths.homeRoot}/produtos`,
  relatorios: `/${rootPaths.homeRoot}/relatorios`,
  config: `/${rootPaths.homeRoot}/config`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  404: `/${rootPaths.errorRoot}/404`,
};
