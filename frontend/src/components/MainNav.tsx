import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';

export default function MainNav() {
  const { loginWithRedirect } = useAuth0();
  return (
    <nav className="flex justify-end w-full">
      <Button 
      variant="ghost" 
      className="font-bold hover:text-orange-500 hover:bg-white flex"
      onClick={async () => await loginWithRedirect()}
      >
      Log In
      </Button>
    </nav>
  );
};
