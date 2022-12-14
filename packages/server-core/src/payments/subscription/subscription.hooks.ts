import { disallow, iff, isProvider } from 'feathers-hooks-common'

import setLoggedInUser from '@xrengine/server-core/src/hooks/set-loggedin-user-in-body'
import setLoggedInUserInQuery from '@xrengine/server-core/src/hooks/set-loggedin-user-in-query'

import authenticate from '../../hooks/authenticate'

// Don't remove this comment. It's needed to format import lines nicely.

export default {
  before: {
    all: [authenticate()],
    find: [disallow('external')],
    get: [iff(isProvider('external'), setLoggedInUserInQuery('userId') as any)],
    create: [authenticate(), setLoggedInUser('userId')],
    update: [disallow('external')],
    patch: [disallow('external')],
    remove: [disallow('external')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
} as any
