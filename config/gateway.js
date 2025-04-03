export const gateway = {
  auth: {
    url: 'http://auth:3000/api/v1/auth',

    endpoints: [
      { path: '/login', as: '/auth/login', method: 'post' },
      { path: '/refresh', as: '/auth/refresh', method: 'post' },
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
};
