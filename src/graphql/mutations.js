/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDebateTopic = /* GraphQL */ `
  mutation CreateDebateTopic(
    $input: CreateDebateTopicInput!
    $condition: ModelDebateTopicConditionInput
  ) {
    createDebateTopic(input: $input, condition: $condition) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDebateTopic = /* GraphQL */ `
  mutation UpdateDebateTopic(
    $input: UpdateDebateTopicInput!
    $condition: ModelDebateTopicConditionInput
  ) {
    updateDebateTopic(input: $input, condition: $condition) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDebateTopic = /* GraphQL */ `
  mutation DeleteDebateTopic(
    $input: DeleteDebateTopicInput!
    $condition: ModelDebateTopicConditionInput
  ) {
    deleteDebateTopic(input: $input, condition: $condition) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDebateInteraction = /* GraphQL */ `
  mutation CreateDebateInteraction(
    $input: CreateDebateInteractionInput!
    $condition: ModelDebateInteractionConditionInput
  ) {
    createDebateInteraction(input: $input, condition: $condition) {
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
export const updateDebateInteraction = /* GraphQL */ `
  mutation UpdateDebateInteraction(
    $input: UpdateDebateInteractionInput!
    $condition: ModelDebateInteractionConditionInput
  ) {
    updateDebateInteraction(input: $input, condition: $condition) {
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
export const deleteDebateInteraction = /* GraphQL */ `
  mutation DeleteDebateInteraction(
    $input: DeleteDebateInteractionInput!
    $condition: ModelDebateInteractionConditionInput
  ) {
    deleteDebateInteraction(input: $input, condition: $condition) {
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
export const createDebateScore = /* GraphQL */ `
  mutation CreateDebateScore(
    $input: CreateDebateScoreInput!
    $condition: ModelDebateScoreConditionInput
  ) {
    createDebateScore(input: $input, condition: $condition) {
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
export const updateDebateScore = /* GraphQL */ `
  mutation UpdateDebateScore(
    $input: UpdateDebateScoreInput!
    $condition: ModelDebateScoreConditionInput
  ) {
    updateDebateScore(input: $input, condition: $condition) {
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
export const deleteDebateScore = /* GraphQL */ `
  mutation DeleteDebateScore(
    $input: DeleteDebateScoreInput!
    $condition: ModelDebateScoreConditionInput
  ) {
    deleteDebateScore(input: $input, condition: $condition) {
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
