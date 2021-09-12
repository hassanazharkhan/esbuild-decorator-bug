import { Model, PartitionKey, SortKey } from '@shiftcoders/dynamo-easy';

@Model({ tableName: 'employee' })
export class Employee {

  @PartitionKey()
  pk: string;

  @SortKey()
  sk: string;

  firstName: string
  lastName: string
  phone: string
  email: string

  constructor(
    pk: string,
    sk: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
  ) {
    this.pk = pk,
    this.sk = sk,
    this.firstName = firstName,
    this.lastName = lastName,
    this.phone = phone,
    this.email = email;
  }

}