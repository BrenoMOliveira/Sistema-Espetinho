export interface NavItem {
  id: number;
  path: string;
  title: string;
  icon: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: '/',
    title: 'Painel geral',
    icon: 'mingcute:home-1-fill',
    active: true,
  },
  {
    id: 3,
    path: '/vendas',
    title: 'Vendas',
    icon: 'material-symbols-light:leaderboard-outline',
    active: true,
  },
  /*{
    id: 4,
    path: '/estoque',
    title: 'Estoque',
    icon: 'ant-design:shopping-cart-outlined',
    active: false,
  },
  {
    id: 5,
    path: '/produtos',
    title: 'Produtos',
    icon: 'lets-icons:bag-alt-light',
    active: false,
  },
  {
    id: 6,
    path: '/relatorios',
    title: 'Relatório de vendas',
    icon: 'lucide:line-chart',
    active: false,
  },
  {
    id: 8,
    path: '/config',
    title: 'Configurações',
    icon: 'mingcute:settings-3-line',
    active: false,
  },*/
  {
    id: 11,
    path: 'authentication/login',
    title: 'Login',
    icon: 'tabler:login',
    active: true,
  },
  /*{
    id: 12,
    path: 'authentication/sign-up',
    title: 'Sair',
    icon: 'tdesign:user-add',
    active: true,
  },*/
];

export default navItems;
