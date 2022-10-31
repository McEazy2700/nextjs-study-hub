/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  mutation Register(\n    $username: String!\n    $email: String!\n    $password1: String!\n    $password2: String!\n  ) {\n    register(\n      username: $username\n      email: $email\n      password1: $password1\n      password2: $password2\n    ) {\n      success\n      errors\n      token\n      refreshToken\n    }\n  }\n": types.RegisterDocument,
};

export function graphql(source: "\n  mutation Register(\n    $username: String!\n    $email: String!\n    $password1: String!\n    $password2: String!\n  ) {\n    register(\n      username: $username\n      email: $email\n      password1: $password1\n      password2: $password2\n    ) {\n      success\n      errors\n      token\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation Register(\n    $username: String!\n    $email: String!\n    $password1: String!\n    $password2: String!\n  ) {\n    register(\n      username: $username\n      email: $email\n      password1: $password1\n      password2: $password2\n    ) {\n      success\n      errors\n      token\n      refreshToken\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;