/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDebateTopic = /* GraphQL */ `
  subscription OnCreateDebateTopic(
    $filter: ModelSubscriptionDebateTopicFilterInput
  ) {
    onCreateDebateTopic(filter: $filter) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDebateTopic = /* GraphQL */ `
  subscription OnUpdateDebateTopic(
    $filter: ModelSubscriptionDebateTopicFilterInput
  ) {
    onUpdateDebateTopic(filter: $filter) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDebateTopic = /* GraphQL */ `
  subscription OnDeleteDebateTopic(
    $filter: ModelSubscriptionDebateTopicFilterInput
  ) {
    onDeleteDebateTopic(filter: $filter) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateDebateInteraction = /* GraphQL */ `
  subscription OnCreateDebateInteraction(
    $filter: ModelSubscriptionDebateInteractionFilterInput
  ) {
    onCreateDebateInteraction(filter: $filter) {
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
export const onUpdateDebateInteraction = /* GraphQL */ `
  subscription OnUpdateDebateInteraction(
    $filter: ModelSubscriptionDebateInteractionFilterInput
  ) {
    onUpdateDebateInteraction(filter: $filter) {
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
export const onDeleteDebateInteraction = /* GraphQL */ `
  subscription OnDeleteDebateInteraction(
    $filter: ModelSubscriptionDebateInteractionFilterInput
  ) {
    onDeleteDebateInteraction(filter: $filter) {
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
export const onCreateDebateScore = /* GraphQL */ `
  subscription OnCreateDebateScore(
    $filter: ModelSubscriptionDebateScoreFilterInput
  ) {
    onCreateDebateScore(filter: $filter) {
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
export const onUpdateDebateScore = /* GraphQL */ `
  subscription OnUpdateDebateScore(
    $filter: ModelSubscriptionDebateScoreFilterInput
  ) {
    onUpdateDebateScore(filter: $filter) {
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
export const onDeleteDebateScore = /* GraphQL */ `
  subscription OnDeleteDebateScore(
    $filter: ModelSubscriptionDebateScoreFilterInput
  ) {
    onDeleteDebateScore(filter: $filter) {
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
