"use client";

import { CheckoutTemplate } from "@/components/templates/CheckoutTemplate";
import { CheckoutForm } from "@/components/organisms/CheckoutForm";

export default function CheckoutPage() {
  return (
    <CheckoutTemplate>
      <div className="max-w-md">
        <CheckoutForm />
      </div>
    </CheckoutTemplate>
  );
}