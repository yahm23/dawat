import { redirect } from 'next/navigation'

export const AuthRouter = ({ loggedStatus }: { loggedStatus: boolean }) => {
  if (loggedStatus) {
    redirect("/profile");
  }
};
