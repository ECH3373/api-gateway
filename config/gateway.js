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
      { path: '/employees', as: '/employees', method: 'get' },
      { path: '/employees/:id', as: '/employees/:id', method: 'get' },
    ],
  },

  courses: {
    url: 'http://courses:3000/api/v1',

    endpoints: [
      { path: '/courses', as: '/courses', method: 'get' },
      { path: '/courses/:id', as: '/courses/:id', method: 'get' },
    ],
  },

  modules: {
    url: 'http://courses:3000/api/v1',

    endpoints: [
      { path: '/modules', as: '/modules', method: 'get' },
      { path: '/modules/:id', as: '/modules/:id', method: 'get' },
    ],
  },

  lessons: {
    url: 'http://courses:3000/api/v1',

    endpoints: [
      { path: '/lessons', as: '/lessons', method: 'get' },
      { path: '/lessons/:id', as: '/lessons/:id', method: 'get' },
    ],
  },

  resources: {
    url: 'http://courses:3000/api/v1',

    endpoints: [
      { path: '/resources', as: '/resources', method: 'get' },
      { path: '/resources/:id', as: '/resources/:id', method: 'get' },
    ],
  },
};
