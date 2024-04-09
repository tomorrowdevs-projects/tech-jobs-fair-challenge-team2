import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseAuth } from "../supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Session } from '@supabase/supabase-js'

const LoginSignup = () => {
  type SessionState = Session | null;
  const [session, setSession] = useState<SessionState>(null);
  const nav = useNavigate();

  useEffect(() => {
    supabaseAuth.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabaseAuth.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const redirect = () => {
    window.location.reload();
    nav("/");
  };

  if (!session) {
    return (
      <Auth
        supabaseClient={supabaseAuth}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
      />
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="btn btn-dark" onClick={redirect}>
          Logged in! Go to home
        </button>
      </div>
    );
  }
};

export default LoginSignup;
