import { Button } from './ui/button';

export default function MainNav() {
  return (
    <nav className="flex justify-end w-full">
      <Button variant="ghost" className="font-bold hover:text-orange-500 hover:bg-white flex">
      Log In
      </Button>
    </nav>
  );
};
