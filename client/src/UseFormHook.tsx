import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
interface IInputs {
  name: string;
  age: string;
}

export const UseFormHook = () => {
  // const { register } = useForm<IInputs>({
  //   //Mode takes what argument you want validation to trigger.
  //   // onSubmit | onBlur ( when user leaves a field) | onChange( each input,bad performance)
  //   // onTouched (first blur event)| all
  //   mode: 'onSubmit',
  //   //if an input does have an error this will tell you when to reValidate onChange| onBlur| onSubmit
  //   reValidateMode: 'onChange',
  //   //Set values for inputs before user interaction always do null or empty string values
  //   // you use defaultValue on the inputs passing it here will set it for the whole form
  //   //Or you need to use an individual controller
  //   defaultValues: {},
  //   context: undefined, // we can use this to pass a state eg authState is logged in then throw errors to specific fields if is not
  //   criteriaMode: 'firstError', // When will the error show up? only first time or all
  //   shouldFocusError: true, //focus to first error if it has a ref, register won't work
  //   shouldUnregister: false, // if a conditional changes the form you should remove the input value from the form if this is true
  //   resolver: undefined, //apparently a resolver can't be used with inbuitl values
  // });
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('name is required'),
    age: Yup.string().required('age is required'),
  });
  const {
    register,
    formState: { errors },
  } = useForm<IInputs>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });
  console.log('errors', errors);

  //REGISTER - using a register subscribes to the html standard of onChange onBlur ref name it supports dot an
  // bracket sytnax. pass read only will disable it register("name.firstName.0")	{name: { firstName: [ 'value' ] }}
  //you can create arrays with by using dot notation and a nubmer

  //WATCH - this is used to determine wwhat to render and whether things are specified values, on first render
  //it will return undefined  unless you define it in the useForm. You can watch all with watch()
  // or pass an array like watch([])

  //CONTROL - is used to subscribe to to components to RHF that can't be registered
  return (
    <div>
      <h1>UseFormHook</h1>
      <input type="text" {...register('name')} />
      <p>{errors?.name?.message}</p>
      <input type="number" {...register('age')} />
      <p>{errors?.age?.message}</p>
      <input type="submit" />
    </div>
  );
};
