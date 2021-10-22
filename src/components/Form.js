export default function Form() {
  function handleUsername(value) {
    console.log('value :>> ', value)
  }

  return (
    <form>
      <input
        onChange={(e) => handleUsername(e.target.value)}
        type='text'
        name='username'
        placeholder='user'
      />
    </form>
  )
}
