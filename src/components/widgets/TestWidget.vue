<template lang="pug">
q-card(style="background-color: antiquewhite;")
  //- HEADER
  q-card-section
    .row
      .col.text-h6 Тестовый плагин
      q-icon.no-wrap.col-auto(name="fullscreen")
    .text-subtitle2 {{ mode }}

  //- CONTENT
  q-card-section
    pre(v-if="result") {{ result }}
    pre(v-if="error") {{ error }}
    
</template>

<script setup lang="ts">

import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

const mode = import.meta.env.VITE_MY_VAR;

const QueryUserActiveDocuments = gql`
  query QueryUserActiveDocuments {
    documents {
      nodes {
        id
        documentTypeId
        title
        createdAt
        createdByUser {
          id
          firstName
          lastName
          avatarUrl
        }
      }
    }
  }
  `;

let { result, loading, error } = useQuery(QueryUserActiveDocuments);
console.log(result);

</script>
