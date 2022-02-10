export default function ViewEnvironmetVariables() {
  return (
    <>
      <p>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</p>
      <p>REACT_APP_NOT_SECRET_CODE = {process.env.REACT_APP_NOT_SECRET_CODE}</p>
      <p>REACT_APP_ENV_DATA = {process.env.REACT_APP_ENV_DATA}</p>
      <p>REACT_APP_DEVELOPMENT_DATA = {process.env.REACT_APP_DEVELOPMENT_DATA}</p>
      <p>REACT_APP_NUMBER = {Number(process.env.REACT_APP_NUMBER) || 3}</p>
      <p>REACT_APP_PRODUCTION_DATA = {process.env.REACT_APP_PRODUCTION_DATA}</p>
    </>
  )
}
