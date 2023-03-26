import SuperTokens from 'supertokens-web-js'
import Session from 'supertokens-web-js/recipe/session'
import Passwordless from 'supertokens-web-js/recipe/passwordless'

SuperTokens.init({
  appInfo: {
    apiDomain: 'https://api.chopmoni.org',
    apiBasePath: '/api/v1',
    appName: '...',
  },
  recipeList: [Session.init(), Passwordless.init()],
})
