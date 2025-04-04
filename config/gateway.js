export const gateway = {
  auth: {
    url: 'http://auth:3000/api/v1/auth',

    endpoints: [
      { path: '/login', as: '/auth/login', method: 'post' },
      { path: '/refresh', as: '/auth/refresh', method: 'post' },
      { path: '/me', as: '/me', method: 'post' },
    ],
  },

  gpt: {
    url: 'http://gpt:3000/api/v1',

    endpoints: [{ path: '/message', as: '/gpt/message', method: 'post' }],
  },

  departments: {
    url: 'http://departments:3000/api/v1',

    endpoints: [
      { path: '/departments', as: '/departments', method: 'get' },
      { path: '/departments/:id', as: '/departments/:id', method: 'get' },
    ],
  },

  apps: {
    url: 'http://apps:3000/api/v1',

    endpoints: [
      { path: '/apps', as: '/apps', method: 'get' },
      { path: '/apps/:id', as: '/apps/:id', method: 'get' },
    ],
  },

  employees: {
    url: 'http://employees:3000/api/v1',

    endpoints: [
      { path: '/employees', as: '/employees', method: 'get' },
      { path: '/employees/:id', as: '/employees/:id', method: 'get' },
    ],
  },

  courses: {
    url: 'http://courses:3000/api/v1',

    endpoints: [
      { path: '/courses', as: '/major/courses', method: 'get' },
      { path: '/courses/:id', as: '/major/courses/:id', method: 'get' },
      { path: '/courses', as: '/major/courses', method: 'post', protected: true },
      { path: '/courses/:id', as: '/major/courses/:id', method: 'patch', protected: true },
    ],
  },

  modules: {
    url: 'http://courses:3000/api/v1',

    endpoints: [
      { path: '/modules', as: '/major/modules', method: 'get' },
      { path: '/modules/:id', as: '/major/modules/:id', method: 'get' },
      { path: '/modules', as: '/major/modules', method: 'post', protected: true },
      { path: '/modules/:id', as: '/major/modules/:id', method: 'patch', protected: true },
    ],
  },

  lessons: {
    url: 'http://courses:3000/api/v1',

    endpoints: [
      { path: '/lessons', as: '/major/lessons', method: 'get' },
      { path: '/lessons/:id', as: '/major/lessons/:id', method: 'get' },
      { path: '/lessons', as: '/major/lessons', method: 'post', protected: true },
      { path: '/lessons/:id', as: '/major/lessons/:id', method: 'patch', protected: true },
    ],
  },

  resources: {
    url: 'http://courses:3000/api/v1',

    endpoints: [
      { path: '/resources', as: '/major/resources', method: 'get' },
      { path: '/resources/:id', as: '/major/resources/:id', method: 'get' },
      { path: '/resources', as: '/major/resources', method: 'post', protected: true },
      { path: '/resources/:id', as: '/major/resources/:id', method: 'patch', protected: true },
    ],
  },

  enrollments: {
    url: 'http://courses:3000/api/v1',

    endpoints: [
      { path: '/enrollments', as: '/major/enrollments', method: 'get' },
      { path: '/enrollments/:id', as: '/major/enrollments/:id', method: 'get' },
      { path: '/enrollments', as: '/major/enrollments', method: 'post', protected: true },
      { path: '/enrollments/:id', as: '/major/enrollments/:id', method: 'patch', protected: true },
    ],
  },

  progress: {
    url: 'http://courses:3000/api/v1',

    endpoints: [
      { path: '/progress', as: '/major/progress', method: 'get' },
      { path: '/progress/:id', as: '/major/progress/:id', method: 'get' },
      { path: '/progress', as: '/major/progress', method: 'post', protected: true },
      { path: '/progress/:id', as: '/major/progress/:id', method: 'patch', protected: true },
    ],
  },

  store: {
    url: 'http://store:3000/api/v1',

    endpoints: [
      { path: '/products', as: '/store/products', method: 'get' },
      { path: '/products/:id', as: '/store/products/:id', method: 'get' },
      { path: '/products', as: '/store/products', method: 'post', protected: true },
      { path: '/products/:id', as: '/store/products/:id', method: 'patch', protected: true },
    ],
  },

  carts: {
    url: 'http://store:3000/api/v1',

    endpoints: [
      { path: '/carts', as: '/store/carts', method: 'get' },
      { path: '/carts/:id', as: '/store/carts/:id', method: 'get' },
      { path: '/carts', as: '/store/carts', method: 'post', protected: true },
      { path: '/carts/:id', as: '/store/carts/:id', method: 'patch', protected: true },
    ],
  },

  orders: {
    url: 'http://store:3000/api/v1',

    endpoints: [
      { path: '/orders', as: '/store/orders', method: 'get' },
      { path: '/orders/:id', as: '/store/orders/:id', method: 'get' },
      { path: '/orders', as: '/store/orders', method: 'post', protected: true },
      { path: '/orders/:id', as: '/store/orders/:id', method: 'patch', protected: true },
    ],
  },

  order_products: {
    url: 'http://store:3000/api/v1',

    endpoints: [
      { path: '/order_products', as: '/store/order_products', method: 'get' },
      { path: '/order_products/:id', as: '/store/order_products/:id', method: 'get' },
      { path: '/order_products', as: '/store/order_products', method: 'post', protected: true },
      { path: '/order_products/:id', as: '/store/order_products/:id', method: 'patch', protected: true },
    ],
  },
};
