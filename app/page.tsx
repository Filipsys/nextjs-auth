import { auth } from "@/auth";
import SignIn from "./components/sign-in";
import SignOut from "./components/sign-out";
import FormComponent from "./components/FormComponent";

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    return <SignIn />;
  }

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="h-16 bg-slate-400 flex w-screen items-center">
        {session.user ? <SignOut /> : <SignIn />}
      </div>
      <div className="w-full h-full bg-slate-200 flex justify-center items-center text-3xl font-bold flex-col">
        <p>
          {session.user
            ? `Hello ${session.user.name}`
            : "You are not signed in"}
        </p>

        <FormComponent />
      </div>
    </div>
  );
}
