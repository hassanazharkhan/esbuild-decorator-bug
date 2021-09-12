import { DynamoStore } from '@shiftcoders/dynamo-easy';
import { Employee } from '../models/employee.model';

export class EmployeeService {

  readonly store = new DynamoStore<Employee>(Employee)
  async get(input: any): Promise<any> {
    const id = input.id;
    return this.store.get(id, id).exec();
  }
}