import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export const UserAvatar = () => (
  <Avatar className="h-8 w-8 rounded-full border border-border">
    <AvatarImage src="https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80" alt="Seller avatar" />
    <AvatarFallback className="text-sm text-primaryText">RA</AvatarFallback>
  </Avatar>
);
