import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

export default function MobileNav() {
  return (
      <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent className="bg-white flex flex-col p-5 py-8">
            <SheetTitle>
                <span> Welcome to MegaBites.com!</span>
            </SheetTitle>
            <Separator className="my-3 border-t border-gray-200" />
            <SheetDescription className="flex">
                <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
            </SheetDescription>
        </SheetContent>
      </Sheet>
  );
};
