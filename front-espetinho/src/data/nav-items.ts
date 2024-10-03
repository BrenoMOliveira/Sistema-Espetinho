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
    path: '#!',
    title: 'Vendas',
    icon: 'material-symbols-light:leaderboard-outline',
    active: false,
  },
  {
    id: 4,
    path: '#!',
    title: 'Estoque',
    icon: 'ant-design:shopping-cart-outlined',
    active: false,
  },
  {
    id: 5,
    path: '#!',
    title: 'Produtos',
    icon: 'lets-icons:bag-alt-light',
    active: false,
  },
  {
    id: 6,
    path: '#!',
    title: 'Relatório de vendas',
    icon: 'lucide:line-chart',
    active: false,
  },
  {
    id: 8,
    path: '#!',
    title: 'Configurações',
    icon: 'mingcute:settings-3-line',
    active: false,
  },
  {
    id: 11,
    path: 'authentication/login',
    title: 'Login',
    icon: 'tabler:login',
    active: true,
  },
  {
    id: 12,
    path: 'authentication/sign-up',
    title: 'Sair',
    icon: 'tdesign:user-add',
    active: true,
  },
];

export default navItems;
