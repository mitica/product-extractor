import dataToProduct from "./schema-01/data-to-product";
import { SchemaVersion, DataToProduct } from "./types";
import { Schema01ProductData } from "./schema-01/types";

const SUPPORTED_SCHEMA_VERSIONS = ["01"];

export const checkSchemaVersion = (version: SchemaVersion) => {
  if (!SUPPORTED_SCHEMA_VERSIONS.includes(version))
    throw new Error(`Unsupported schema version: ${version}`);
};

export const getSchemaDataToObject = (
  version: SchemaVersion
): DataToProduct<Schema01ProductData> => {
  checkSchemaVersion(version);

  return dataToProduct;
};
