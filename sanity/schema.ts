import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";

import service from "./schemaTypes/service";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, service],
};
