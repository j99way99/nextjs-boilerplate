"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { setVerbosity } from "ts-invariant";

setVerbosity("debug");

function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://assured-shiner-89.hasura.app/v1/graphql",
    fetchOptions: { cache: "no-store" },
    headers: {
        "x-hasura-admin-secret" :
        "iQ9MqBDpCDIkdY5K4gDIb7H5si0JAp6Tn5k2ZlqgchT82BenPGKPD0173S0UrE46"
        // Bearer : {token}
    }
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}