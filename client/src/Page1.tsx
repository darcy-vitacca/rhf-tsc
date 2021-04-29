import { Checkbox } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Input } from './Input';

//we can give hook form a typescript definition into the custom hook
//So we can start validating all the input names
type FormValue = {
  firstName: string;
  lastName: string;
  thirdName: string;
  age: number;
  gender: string;
  developer: string;
};

export const Page1 = () => {
  const {
    control,
    // watch,
    register,
    handleSubmit,
    formState: { errors }, //we get errors out of the form state
  } = useForm<FormValue>(); // subsribe to values in the form it will give an error on naming error
  const { push } = useHistory();

  //Once we give the register all the inputs if they match up by type get inside the custom hook

  // calling watch shows all inputs curretnyl within the hook
  // console.log('watch()', watch());

  // Validation is the main reason to use a library react-hook-form has built in but can also
  // attach schema.

  //When using UI libraires if a component doesn't expose an inputs ref you can wrap it in the controller process which will register a ref
  const onSubmit = (formData: any) => {
    console.log('formData', formData);
    push('/page2');
  };
  console.log('errors', errors);
  return (
    <div>
      <h1>Page 1</h1>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
        //this is a call back for when the form is submitted
        onSubmit={handleSubmit((data) => console.log('data', data))}
      >
        <label>firstName</label>
        <input
          type="text"
          {...register('firstName', { required: true, maxLength: 4 })}
        />
        {errors.firstName && <p>This is required</p>}
        <label>lastName</label>
        <input
          type="text"
          {...register('lastName', { required: 'This is required' })}
        />
        {errors.lastName && <p>{errors.lastName?.message}</p>}

        {/* We can pass html standards eg convert value as number */}
        <label>age</label>
        <input
          type="number"
          {...register('age', { required: true, valueAsNumber: true })}
        />
        {errors.age && <p>{errors.age?.message}</p>}
        <label>gender</label>
        <input type="text" {...register('gender', { required: true })} />
        {errors.gender && <p>{errors.gender?.message}</p>}
        <label>developer</label>
        <input
          type="text"
          {...register('developer', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.lastName && <p>{errors.firstName?.message}</p>}

        <Controller
          name="thirdName"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />

        <Input control={control} name="FirstName" rules={{ required: true }} />
        <input type="submit" />
      </form>
    </div>
  );
};
