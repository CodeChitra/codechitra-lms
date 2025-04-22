import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import { useCreateStripePaymentIntentMutation } from "@/state/api";
import { useCurrentCourse } from "@/hooks/useCurrentCourse";
import Loading from "@/components/Loading";
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY not found!");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const appearance: Appearance = {
  theme: "night",
  variables: {
    colorPrimary: "#1e40af", // Deep blue (tailwind blue-800)
    colorBackground: "#1f2937", // Slightly softer dark (tailwind gray-800)
    colorText: "#f1f5f9", // Light text (tailwind slate-100)
    colorDanger: "#dc2626", // More vivid red (tailwind red-600)
    colorTextPlaceholder: "#94a3b8", // Subtle light gray-blue
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    spacingUnit: "4px", // Slightly more space
    borderRadius: "12px", // More rounded for a modern feel
    fontSizeBase: "15px", // Just a little larger for clarity
  },
};

const StripeProvider = ({ children }: { children: React.ReactNode }) => {
  const [clientSecret, setClientSecret] = useState<string | "">("");
  const [createStripePaymentIntent] = useCreateStripePaymentIntentMutation();
  const { course } = useCurrentCourse();

  useEffect(() => {
    if (!course) return;

    const fetchPayementIntent = async () => {
      const result = await createStripePaymentIntent({
        amount: course?.price ?? 100000,
      }).unwrap();

      setClientSecret(result.clientSecret);
    };

    fetchPayementIntent();
  }, [createStripePaymentIntent, course?.price, course]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  if (!clientSecret) {
    return <Loading />;
  }

  return (
    <Elements stripe={stripePromise} options={options} key={clientSecret}>
      {children}
    </Elements>
  );
};

export default StripeProvider;
