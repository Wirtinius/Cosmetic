import useLogout from './handler/logoutHandler';
import { toast } from 'sonner';

export function Logout () {
    // toast.success('Logout Successful!');
    useLogout();
  };