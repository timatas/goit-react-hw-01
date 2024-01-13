import "./TransactionItem.module.css";
import clsx from "clsx";
export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td className="type">{type}</td>
      <td className="amount">{amount}</td>
      <td className="currency">{currency}</td>
    </>
  );
};
