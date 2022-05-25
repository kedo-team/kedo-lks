import { boot } from 'quasar/wrappers';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: import.meta.env.VITE_API_URL,
})


export default boot(({ app }) => {
  // Set i18n instance on app
  app.provide(DefaultApolloClient, apolloClient)
});
