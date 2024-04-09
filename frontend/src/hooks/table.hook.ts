import { useState, useEffect } from "react";
import { Contact } from "../models";
import { getContatti } from "../api/contacts";
import { supabase, supabaseLive } from "../supabase";

export function useContatti() {
  const [contatti, setContatti] = useState<Contact[]>([]);

  const fetchContatti = async () => {
    const data = await getContatti();

    setContatti(data || []);
  };

  useEffect(() => {
    fetchContatti();
    const subscription = supabaseLive
      .channel("contatti_channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Contatti" },
        (payload) => {
          fetchContatti();
        }
      )
      .subscribe();

    // Cleanup subscription on component unmount
    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return { contatti };
}
