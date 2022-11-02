type errorMessage = {
  message: string,
  code: string
}

type ErrorType = {
  errors: errorMessage[]
}

const ErrorMessage = ({ errors }: ErrorType) => {

return (
  <ul className='bg-red-600/30 rounded-lg p-5 w-full'>
    {errors.map((error:errorMessage) => {
      return (
      <li key={Math.random()} className='flex-col flex mb-2'>
        <h5 className='text-red-600'>{error.code}</h5>
        <li className='list-disc ml-3'>{error.message}</li>
      </li>)
      })
    }
  </ul>
)
}

export default ErrorMessage
