import { useState } from "react";

export const useSentMail = <T>() => {
  const [loading, setLoading] = useState<boolean>(false);

  const sentMail = async (data: T) => {
    try {
      setLoading(true);
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        return { error: json.error?.message || "Failed to send email" };
      }

      return { error: null };
    } catch (error) {
      return {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    sentMail,
  };
};
