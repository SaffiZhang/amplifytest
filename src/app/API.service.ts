/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  todoTestId?: string | null;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  todoTestId?: string | null;
};

export type DeleteTodoInput = {
  id?: string | null;
};

export type CreateTestInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type UpdateTestInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteTestInput = {
  id?: string | null;
};

export type ModelTodoFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  todoTestId?: ModelStringFilterInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelTestFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  and?: Array<ModelTestFilterInput | null> | null;
  or?: Array<ModelTestFilterInput | null> | null;
  not?: ModelTestFilterInput | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
  test: {
    __typename: "Test";
    id: string;
    name: string;
    description: string | null;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
  test: {
    __typename: "Test";
    id: string;
    name: string;
    description: string | null;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
  test: {
    __typename: "Test";
    id: string;
    name: string;
    description: string | null;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateTestMutation = {
  __typename: "Test";
  id: string;
  name: string;
  description: string | null;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      name: string;
      description: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateTestMutation = {
  __typename: "Test";
  id: string;
  name: string;
  description: string | null;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      name: string;
      description: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteTestMutation = {
  __typename: "Test";
  id: string;
  name: string;
  description: string | null;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      name: string;
      description: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
  test: {
    __typename: "Test";
    id: string;
    name: string;
    description: string | null;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description: string | null;
    test: {
      __typename: "Test";
      id: string;
      name: string;
      description: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTestQuery = {
  __typename: "Test";
  id: string;
  name: string;
  description: string | null;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      name: string;
      description: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListTestsQuery = {
  __typename: "ModelTestConnection";
  items: Array<{
    __typename: "Test";
    id: string;
    name: string;
    description: string | null;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
  test: {
    __typename: "Test";
    id: string;
    name: string;
    description: string | null;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
  test: {
    __typename: "Test";
    id: string;
    name: string;
    description: string | null;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description: string | null;
  test: {
    __typename: "Test";
    id: string;
    name: string;
    description: string | null;
    todos: {
      __typename: "ModelTodoConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateTestSubscription = {
  __typename: "Test";
  id: string;
  name: string;
  description: string | null;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      name: string;
      description: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateTestSubscription = {
  __typename: "Test";
  id: string;
  name: string;
  description: string | null;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      name: string;
      description: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteTestSubscription = {
  __typename: "Test";
  id: string;
  name: string;
  description: string | null;
  todos: {
    __typename: "ModelTodoConnection";
    items: Array<{
      __typename: "Todo";
      id: string;
      name: string;
      description: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTodo(input: CreateTodoInput): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!) {
        createTodo(input: $input) {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(input: UpdateTodoInput): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!) {
        updateTodo(input: $input) {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(input: DeleteTodoInput): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!) {
        deleteTodo(input: $input) {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async CreateTest(input: CreateTestInput): Promise<CreateTestMutation> {
    const statement = `mutation CreateTest($input: CreateTestInput!) {
        createTest(input: $input) {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTestMutation>response.data.createTest;
  }
  async UpdateTest(input: UpdateTestInput): Promise<UpdateTestMutation> {
    const statement = `mutation UpdateTest($input: UpdateTestInput!) {
        updateTest(input: $input) {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTestMutation>response.data.updateTest;
  }
  async DeleteTest(input: DeleteTestInput): Promise<DeleteTestMutation> {
    const statement = `mutation DeleteTest($input: DeleteTestInput!) {
        deleteTest(input: $input) {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTestMutation>response.data.deleteTest;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            test {
              __typename
              id
              name
              description
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async GetTest(id: string): Promise<GetTestQuery> {
    const statement = `query GetTest($id: ID!) {
        getTest(id: $id) {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTestQuery>response.data.getTest;
  }
  async ListTests(
    filter?: ModelTestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTestsQuery> {
    const statement = `query ListTests($filter: ModelTestFilterInput, $limit: Int, $nextToken: String) {
        listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTestsQuery>response.data.listTests;
  }
  OnCreateTodoListener: Observable<OnCreateTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateTodoSubscription>;

  OnUpdateTodoListener: Observable<OnUpdateTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateTodoSubscription>;

  OnDeleteTodoListener: Observable<OnDeleteTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          description
          test {
            __typename
            id
            name
            description
            todos {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteTodoSubscription>;

  OnCreateTestListener: Observable<OnCreateTestSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTest {
        onCreateTest {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateTestSubscription>;

  OnUpdateTestListener: Observable<OnUpdateTestSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTest {
        onUpdateTest {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateTestSubscription>;

  OnDeleteTestListener: Observable<OnDeleteTestSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTest {
        onDeleteTest {
          __typename
          id
          name
          description
          todos {
            __typename
            items {
              __typename
              id
              name
              description
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteTestSubscription>;
}
