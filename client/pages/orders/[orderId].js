import { Router } from "next/router";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import useRequest from "../../hooks/use-request";

const orderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  const { doRequest, errors } = useRequest({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
    },
    onSuccess: (payment) => Router.push("/orders"),
  });
  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }

  <div>
    <h2>Your Orders</h2>
    <div>
      Time left to pay: {timeLeft} seconds
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey="pk_test_51IuuCeSDEfXVJZ3ylO9GOhN7gaixENFjqVFtPPnMm7t7fT1PF6PcPpaonD50jIot8Vo1C0C1qPdtkyWsxWNnqJKd00GG1gmJDL"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      {errors}
    </div>
  </div>;
};
orderShow.getInitialProps = async (context, client) => {
  const orderId = context.query;

  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default orderShow;
