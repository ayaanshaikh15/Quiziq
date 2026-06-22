
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function App() {
  return (
    <>
      <header>
        <Show when="signed-out">
          
          <SignInButton mode='modal' >
            <button className='px-4 py-2 bg-black text-amber-50 rounded-2xl border-2 border-amber-50 m-3'>SignIn</button>
          </SignInButton>
       
          <SignUpButton mode='modal'>
            <button className='px-4 py-2 bg-black text-amber-50 rounded-2xl border-2 border-amber-50 m-3'>SignUp</button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App