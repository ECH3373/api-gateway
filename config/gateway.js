export const gateway = {
  auth: {
    url: 'http://auth:3000/api/v1/auth',

    endpoints: [
      { path: '/login', as: '/login', method: 'post' },
      { path: '/refresh', as: '/refresh', method: 'post' },
      { path: '/me', as: '/me', method: 'post' },
    ],
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
      { path: '/apps', as: '/apps', method: 'get' },
      { path: '/apps/:id', as: '/apps/:id', method: 'get' },
    ],
  },

  pokemon: {
    url: 'https://pokeapi.co/api/v2/pokemon',

    endpoints: [{ path: '/:id', as: '/:id', method: 'get' }],
  },
};
