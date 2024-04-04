import { useState, useEffect } from "react";
import { Contact } from "../models";
import { getContatti } from "../api/contacts";

export function useContatti() {
  const [contatti, setContatti] = useState<Contact[]>([]);
  const fetchContatti = async () => {
    const data = await getContatti();

    setContatti(data || []);
  };

  useEffect(() => {
    fetchContatti();
    //todo gestire il real time sulla tabella
    // const subscription = supabase
    //   .channel("contatti_channel")
    //   .on(
    //     "postgres_changes",
    //     { event: "*", schema: "public", table: "contatti" },
    //     (payload) => {
    //       console.log("Change detected:", payload);
    //       fetchContatti();
    //     },
    //   )
    //   .subscribe();

    // Cleanup subscription on component unmount
    return () => {
      // supabase.removeChannel(subscription);
    };
  }, []);

  return { contatti };
}
