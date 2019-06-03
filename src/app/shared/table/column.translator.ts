import Schemas from './schemas';

export default class ColumnTranslator {
  getSchema(schema) {
    return Schemas[schema];
  }
}
