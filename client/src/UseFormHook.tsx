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
    name: Yup.string().required(),
    age: Yup.string().required(),
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

  return (
    <div>
      <h1>UseFormHook</h1>
      <input type="text" {...register('name')} />
      <input type="number" {...register('age')} />
      <input type="submit" />
    </div>
  );
};
