import { CheckoutResponse, PaymentDetails } from "@/types/api";
import { Buyer } from "@/types/buyer";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.CHECKOUT_API_URL || "http://localhost:3001",
});

export const createCheckout = async (data: Buyer & { valor: number }) => {
  const response = await api.post<CheckoutResponse>("/checkout", data);
  return response.data;
};

export const getCheckoutDetails = async (orderId: string) => {
  const response = await api.get<CheckoutResponse & {nome_cliente: string}>(`/checkout/${orderId}`);
  return response.data;
};

export const approvePayment = async (orderId: string) => {
  const response = await api.post(`/payment/approve`, { id_transacao: orderId });
  return response.data;
};

export const getPaymentDetails = async (orderId: string) => {
  const response = await api.get<PaymentDetails>(`/payment/${orderId}`);
  return response.data;
};