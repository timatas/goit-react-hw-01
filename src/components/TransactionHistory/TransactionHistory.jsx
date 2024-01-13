import { TransactionItem } from "../TransactionItem/TransactionItem";
import "./TransactionHistory.module.css";
import clsx from "clsx";
export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <TransactionItem item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
