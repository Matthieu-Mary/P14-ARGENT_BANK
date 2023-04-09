type Props = {
  message: string;
}

function ErrorPage({message}: Props) {
  return (
    <div className="error-page">
      <h1>{message}</h1>
    </div>
  )
}

export default ErrorPage