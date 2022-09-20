export const InputWithLabel = (props) => {
  const { label, labelClassName, inputClassName, placeholder, error, errorClassName, name, register} = props;
  console.log('register: ', register);
  return (
    <div>
      {label&&
        <p className={`${labelClassName}`}>
          {label}
        </p>
      }
      <input className={`mt-2 ${inputClassName}`}
        placeholder={placeholder}
        {...register(name)}
      />
      {error&&
      <p className={`${errorClassName}`}>
        {error.message}
      </p>
      }
    </div>
  )
}