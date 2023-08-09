import { AuthParams } from './authentication';

export type IRoute = AuthParams & {
  name: string;
  key: string;
  // 当前页是否展示面包屑
  breadcrumb?: boolean;
  children?: IRoute[];
  // 当前路由是否渲染菜单项，为 true 的话不会在菜单中显示，但可通过路由地址访问。
  ignore?: boolean;
};

export const routes: IRoute[] = [
  {
    name: '仪表盘',
    key: 'dashboard',
    children: [
      {
        name: '工作台',
        key: 'dashboard/workplace',
      },
      {
        name: '实时监控',
        key: 'dashboard/monitor',
        /* requiredPermissions: [
          { resource: 'dashboard.monitor', actions: ['read'] },
        ],*/
      },
    ],
  },
  {
    name: '数据可视化',
    key: 'visualization',
    children: [
      {
        name: '分析页',
        key: 'visualization/data-analysis',
        // requiredPermissions: [{ resource: '分析页', actions: ['read'] }],
      },
      {
        name: '多维数据分析',
        key: 'visualization/multi-dimension-data-analysis',
        /*requiredPermissions: [
          {
            resource: '分析页',
            actions: ['read', 'write'],
          },
          {
            resource: '多维数据分析',
            actions: ['write'],
          },
        ],*/
        oneOfPerm: true,
      },
    ],
  },
  {
    name: '列表页',
    key: 'list',
    children: [
      {
        name: '查询表格',
        key: 'list/search-table',
      },
      {
        name: '卡片列表',
        key: 'list/card',
      },
    ],
  },
  {
    name: '表单页',
    key: 'form',
    children: [
      {
        name: '分组表单',
        key: 'form/group',
        /*requiredPermissions: [
          { resource: '分组表单', actions: ['read', 'write'] },
        ],*/
      },
      {
        name: '分步表单',
        key: 'form/step',
        // requiredPermissions: [{ resource: '分步表单', actions: ['read'] }],
      },
    ],
  },
  {
    name: '详情页',
    key: 'profile',
    children: [
      {
        name: '基础详情页',
        key: 'profile/basic',
      },
    ],
  },

  {
    name: '结果页',
    key: 'result',
    children: [
      {
        name: '成功',
        key: 'result/success',
        breadcrumb: false,
      },
      {
        name: '失败',
        key: 'result/error',
        breadcrumb: false,
      },
    ],
  },
  {
    name: '异常',
    key: 'exception',
    children: [
      {
        name: '403',
        key: 'exception/403',
      },
      {
        name: '404',
        key: 'exception/404',
      },
      {
        name: '500',
        key: 'exception/500',
      },
    ],
  },
  {
    name: '个人中心',
    key: 'user',
    children: [
      {
        name: '用户信息',
        key: 'user/info',
      },
      {
        name: '用户设置',
        key: 'user/setting',
      },
    ],
  },
];

export const getName = (path: string, routes) => {
  return routes.find((item) => {
    const itemPath = `/${item.key}`;
    if (path === itemPath) {
      return item.name;
    } else if (item.children) {
      return getName(path, item.children);
    }
  });
};

export const generatePermission = (role: string) => {
  const actions = role === 'admin' ? ['*'] : ['read'];
  const result = {};
  routes.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        result[child.name] = actions;
      });
    }
  });
  return result;
};
