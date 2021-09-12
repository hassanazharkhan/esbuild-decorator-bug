import 'reflect-metadata'
import { EmployeeService } from './service/employee.service';


const service = new EmployeeService();

export const handler = async (event: any) => {
  console.log('Event: ', JSON.stringify(event, null, 2));

  const body: any = JSON.parse(event.body);
  const user = await service.get({
    id: body.id,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      data: user,
    }),
  };
};