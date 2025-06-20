export const gateway = {
  auth: {
    url: 'http://auth-api:3000/api/v1/auth',

    endpoints: [
      { path: '/login', as: '/auth/login', method: 'post' },
      { path: '/refresh', as: '/auth/refresh', method: 'post' },
      { path: '/me', as: '/me', method: 'post' },
    ],
  },

  gpt: {
    url: 'http://gpt-api:3000/api/v1',

    endpoints: [
      { path: '/chat', as: '/gpt/chat', method: 'post' },
      { path: '/tts', as: '/gpt/tts', method: 'post' },
    ],
  },

  departments: {
    url: 'http://departments-api:3000/api/v1',

    endpoints: [
      { path: '/departments', as: '/departments', method: 'get' },
      { path: '/departments/:id', as: '/departments/:id', method: 'get' },
    ],
  },

  apps: {
    url: 'http://apps-api:3000/api/v1',

    endpoints: [
      { path: '/apps', as: '/apps', method: 'get' },
      { path: '/apps/:id', as: '/apps/:id', method: 'get' },
    ],
  },

  employees: {
    url: 'http://employees-api:3000/api/v1',

    endpoints: [
      { path: '/employees', as: '/employees', method: 'get' },
      { path: '/employees/:id', as: '/employees/:id', method: 'get' },
    ],
  },

  courses: {
    url: 'http://courses-api:3000/api/v1',

    endpoints: [
      { path: '/courses', as: '/courses/courses', method: 'get' },
      { path: '/courses/:id', as: '/courses/courses/:id', method: 'get' },
      { path: '/courses', as: '/courses/courses', method: 'post', protected: true },
      { path: '/courses/:id', as: '/courses/courses/:id', method: 'patch', protected: true },
      { path: '/courses/:id', as: '/courses/courses/:id', method: 'delete', protected: true },
    ],
  },

  modules: {
    url: 'http://courses-api:3000/api/v1',

    endpoints: [
      { path: '/modules', as: '/courses/modules', method: 'get' },
      { path: '/modules/:id', as: '/courses/modules/:id', method: 'get' },
      { path: '/modules', as: '/courses/modules', method: 'post', protected: true },
      { path: '/modules/:id', as: '/courses/modules/:id', method: 'patch', protected: true },
      { path: '/modules/:id', as: '/courses/modules/:id', method: 'delete', protected: true },
    ],
  },

  lessons: {
    url: 'http://courses-api:3000/api/v1',

    endpoints: [
      { path: '/lessons', as: '/courses/lessons', method: 'get' },
      { path: '/lessons/:id', as: '/courses/lessons/:id', method: 'get' },
      { path: '/lessons', as: '/courses/lessons', method: 'post', protected: true },
      { path: '/lessons/:id', as: '/courses/lessons/:id', method: 'patch', protected: true },
      { path: '/lessons/:id', as: '/courses/lessons/:id', method: 'delete', protected: true },
    ],
  },

  resources: {
    url: 'http://courses-api:3000/api/v1',

    endpoints: [
      { path: '/resources', as: '/courses/resources', method: 'get' },
      { path: '/resources/:id', as: '/courses/resources/:id', method: 'get' },
      { path: '/resources', as: '/courses/resources', method: 'post', protected: true },
      { path: '/resources/:id', as: '/courses/resources/:id', method: 'patch', protected: true },
      { path: '/resources/:id', as: '/courses/resources/:id', method: 'delete', protected: true },
    ],
  },

  enrollments: {
    url: 'http://courses-api:3000/api/v1',

    endpoints: [
      { path: '/enrollments', as: '/courses/enrollments', method: 'get' },
      { path: '/enrollments/:id', as: '/courses/enrollments/:id', method: 'get' },
      { path: '/enrollments', as: '/courses/enrollments', method: 'post', protected: true },
      { path: '/enrollments/:id', as: '/courses/enrollments/:id', method: 'patch', protected: true },
      { path: '/enrollments/:id', as: '/courses/enrollments/:id', method: 'delete', protected: true },
    ],
  },

  progress: {
    url: 'http://courses-api:3000/api/v1',

    endpoints: [
      { path: '/progress', as: '/courses/progress', method: 'get' },
      { path: '/progress/:id', as: '/courses/progress/:id', method: 'get' },
      { path: '/progress', as: '/courses/progress', method: 'post', protected: true },
      { path: '/progress/:id', as: '/courses/progress/:id', method: 'patch', protected: true },
      { path: '/progress/:id', as: '/courses/progress/:id', method: 'delete', protected: true },
    ],
  },

  store: {
    url: 'http://store-api:3000/api/v1',

    endpoints: [
      { path: '/products', as: '/store/products', method: 'get' },
      { path: '/products/:id', as: '/store/products/:id', method: 'get' },
      { path: '/products', as: '/store/products', method: 'post', protected: true },
      { path: '/products/:id', as: '/store/products/:id', method: 'patch', protected: true },
      { path: '/products/:id', as: '/store/products/:id', method: 'delete', protected: true },
    ],
  },

  carts: {
    url: 'http://store-api:3000/api/v1',

    endpoints: [
      { path: '/carts', as: '/store/carts', method: 'get' },
      { path: '/carts/:id', as: '/store/carts/:id', method: 'get' },
      { path: '/carts', as: '/store/carts', method: 'post', protected: true },
      { path: '/carts/:id', as: '/store/carts/:id', method: 'patch', protected: true },
    ],
  },

  orders: {
    url: 'http://store-api:3000/api/v1',

    endpoints: [
      { path: '/orders', as: '/store/orders', method: 'get' },
      { path: '/orders/:id', as: '/store/orders/:id', method: 'get' },
      { path: '/orders', as: '/store/orders', method: 'post', protected: true },
      { path: '/orders/:id', as: '/store/orders/:id', method: 'patch', protected: true },
    ],
  },

  order_products: {
    url: 'http://store-api:3000/api/v1',

    endpoints: [
      { path: '/order_products', as: '/store/order_products', method: 'get' },
      { path: '/order_products/:id', as: '/store/order_products/:id', method: 'get' },
      { path: '/order_products', as: '/store/order_products', method: 'post', protected: true },
      { path: '/order_products/:id', as: '/store/order_products/:id', method: 'patch', protected: true },
    ],
  },

  invoice: {
    url: 'http://store-api:3000/api/v1',

    endpoints: [{ path: '/invoices/:id', as: '/store/invoices/:id', method: 'get', isBinary: true }],
  },

  event: {
    url: 'http://major-api:3000/api/v1',

    endpoints: [
      { path: '/events', as: '/major/events', method: 'get' },
      { path: '/events/:id', as: '/major/events/:id', method: 'get' },
      { path: '/events', as: '/major/events', method: 'post', protected: true },
      { path: '/events/:id', as: '/major/events/:id', method: 'patch', protected: true },
      { path: '/events/:id', as: '/major/events/:id', method: 'delete', protected: true },
    ],
  },

  enrollment: {
    url: 'http://major-api:3000/api/v1',

    endpoints: [
      { path: '/enrollments', as: '/major/enrollments', method: 'get' },
      { path: '/enrollments/:id', as: '/major/enrollments/:id', method: 'get' },
      { path: '/enrollments', as: '/major/enrollments', method: 'post', protected: true },
      { path: '/enrollments/:id', as: '/major/enrollments/:id', method: 'patch', protected: true },
      { path: '/enrollments/:id', as: '/major/enrollments/:id', method: 'delete', protected: true },
    ],
  },

  major_images: {
    url: 'http://major-api:3000/api/v1',

    endpoints: [
      { path: '/login', as: '/major/images', method: 'get' },
      { path: '/login/:id', as: '/major/images/:id', method: 'get' },
      { path: '/login', as: '/major/images', method: 'post' },
      { path: '/login/:id', as: '/major/images/:id', method: 'patch' },
      { path: '/login/:id', as: '/major/images/:id', method: 'delete' },
    ],
  },

  defects: {
    url: 'http://defects-api:3000/api/v1',

    endpoints: [
      { path: '/defects', as: '/defects', method: 'get' },
      { path: '/defects/:id', as: '/defects/:id', method: 'get' },
    ],
  },

  major_pieces: {
    url: 'http://major-api:3000/api/v1',

    endpoints: [
      { path: '/pieces', as: '/major/pieces', method: 'get' },
      { path: '/pieces/:id', as: '/major/pieces/:id', method: 'get' },
      { path: '/pieces', as: '/major/pieces', method: 'post' },
      { path: '/pieces/:id', as: '/major/pieces/:id', method: 'patch' },
      { path: '/pieces/:id', as: '/major/pieces/:id', method: 'delete' },
    ],
  },

  major_dots: {
    url: 'http://major-api:3000/api/v1',

    endpoints: [
      { path: '/dots', as: '/major/dots', method: 'get' },
      { path: '/dots/:id', as: '/major/dots/:id', method: 'get' },
      { path: '/dots', as: '/major/dots', method: 'post' },
      { path: '/dots/:id', as: '/major/dots/:id', method: 'patch' },
      { path: '/dots/:id', as: '/major/dots/:id', method: 'delete' },
    ],
  },
};
