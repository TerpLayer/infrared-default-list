/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ValidatorListSchema {
  keywords?: string[]
  name: string
  validators: {
    description: string
    id: string
    logoURI?: string
    name: string
    twitter?: string
    website?: string
    [k: string]: unknown
  }[]
  version: {
    major: number
    minor: number
    patch: number
    [k: string]: unknown
  }
  [k: string]: unknown
}
