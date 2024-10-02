/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDebateTopic = /* GraphQL */ `
  query GetDebateTopic($id: ID!) {
    getDebateTopic(id: $id) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDebateTopics = /* GraphQL */ `
  query ListDebateTopics(
    $filter: ModelDebateTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDebateTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        topic
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchDebateTopics = /* GraphQL */ `
  query SearchDebateTopics(
    $filter: SearchableDebateTopicFilterInput
    $sort: [SearchableDebateTopicSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableDebateTopicAggregationInput]
  ) {
    searchDebateTopics(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        topic
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getDebateInteraction = /* GraphQL */ `
  query GetDebateInteraction($id: ID!) {
    getDebateInteraction(id: $id) {
      id
      debateTopic {
        id
        topic
        createdAt
        updatedAt
        __typename
      }
      username
      msg
      round
      side
      createdAt
      updatedAt
      debateInteractionDebateTopicId
      __typename
    }
  }
`;
export const listDebateInteractions = /* GraphQL */ `
  query ListDebateInteractions(
    $filter: ModelDebateInteractionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDebateInteractions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        debateTopic {
          id
          topic
          createdAt
          updatedAt
          __typename
        }
        username
        msg
        round
        side
        createdAt
        updatedAt
        debateInteractionDebateTopicId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchDebateInteractions = /* GraphQL */ `
  query SearchDebateInteractions(
    $filter: SearchableDebateInteractionFilterInput
    $sort: [SearchableDebateInteractionSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableDebateInteractionAggregationInput]
  ) {
    searchDebateInteractions(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        debateTopic {
          id
          topic
          createdAt
          updatedAt
          __typename
        }
        username
        msg
        round
        side
        createdAt
        updatedAt
        debateInteractionDebateTopicId
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getDebateScore = /* GraphQL */ `
  query GetDebateScore($id: ID!) {
    getDebateScore(id: $id) {
      id
      debateTopic {
        id
        topic
        createdAt
        updatedAt
        __typename
      }
      judgeDecision {
        id
        topic
        createdAt
        updatedAt
        __typename
      }
      winningTeam
      createdAt
      updatedAt
      debateScoreDebateTopicId
      __typename
    }
  }
`;
export const listDebateScores = /* GraphQL */ `
  query ListDebateScores(
    $filter: ModelDebateScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDebateScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        debateTopic {
          id
          topic
          createdAt
          updatedAt
          __typename
        }
        judgeDecision {
          id
          topic
          createdAt
          updatedAt
          __typename
        }
        winningTeam
        createdAt
        updatedAt
        debateScoreDebateTopicId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchDebateScores = /* GraphQL */ `
  query SearchDebateScores(
    $filter: SearchableDebateScoreFilterInput
    $sort: [SearchableDebateScoreSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableDebateScoreAggregationInput]
  ) {
    searchDebateScores(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        debateTopic {
          id
          topic
          createdAt
          updatedAt
          __typename
        }
        judgeDecision {
          id
          topic
          createdAt
          updatedAt
          __typename
        }
        winningTeam
        createdAt
        updatedAt
        debateScoreDebateTopicId
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
