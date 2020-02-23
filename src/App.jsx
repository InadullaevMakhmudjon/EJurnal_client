import React, { useState, useEffect } from 'react';
import ErrorSnackbar from 'components/Error/Snackbar';
import ErrorDialog from 'components/Error/Dialog';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { useSelector } from 'react-redux';
import Routes from './Routes';
import 'assets/css/index.css';

// eslint-disable-next-line react/prop-types
export default () => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const token = useSelector(({ user: { token: userToken } }) => userToken);

  useEffect(() => {
    if (errorMessage) {
      setShowError(true);
    }
  }, [errorMessage]);

  const cache = new InMemoryCache();

  const errorLink = onError(({ graphQLErrors, networkError, response }) => {
    if (graphQLErrors) {
      // eslint-disable-next-line array-callback-return
      graphQLErrors.map(({ message, locations, path }) => {
        // eslint-disable-next-line no-console
        console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        setErrorMessage(message);
      });
    }

    if (networkError) {
      // eslint-disable-next-line no-console
      console.error(`[Network error]: ${networkError}`);
      setErrorMessage(networkError);
    }
    if (response) { response.errors = null; response.data = {}; }
  });

  const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL : 'http://localhost:3030/graphql',
    cache,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const client = new ApolloClient({
    cache,
    link: errorLink.concat(httpLink),
  });

  return (
    <ApolloProvider client={client}>
      <Routes />
      <ErrorDialog />
      <ErrorSnackbar
        open={showError}
        onClose={() => { setShowError(false); setErrorMessage(''); }}
        message={errorMessage}
      />
    </ApolloProvider>
  );
};
