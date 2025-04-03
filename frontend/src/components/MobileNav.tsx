import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet';
import { CircleUserRound, Menu } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';
import MobileNavLinks from './MobileNavLinks';

export default function MobileNav() {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
      <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent className="bg-white flex flex-col p-5 py-8">
            <SheetTitle>
                {isAuthenticated? (
                    <span className="flex items-center font-bold gap-2">
                        <CircleUserRound className="text-orange-500" />
                        {user?.email}
                    </span> 
                ) : (
                    <span> Welcome to MegaBites.com!</span>
                )}
            </SheetTitle>
            <Separator className="my-3 border-t border-gray-200" />
            <SheetDescription className="flex flex-col gap-4">
                {isAuthenticated ? (<MobileNavLinks/>
                ) : (
                    <Button 
                    onClick={() => loginWithRedirect()}
                    className="flex-1 font-bold bg-orange-500">Log In</Button>
                ) } 
            </SheetDescription>
        </SheetContent>
      </Sheet>
  );
};
