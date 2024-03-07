import { v4 as uuidv4 } from 'uuid';

export default class UUIDGenerator {
  generate(): string {
    return uuidv4();
  }
}
