import { TransactionItem } from "../TransactionItem/TransactionItem";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  // const colorRow = index % 2 === 0 ? "css.light" : "css.dark";
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 0 ? css.light : css.dark}
            >
              <TransactionItem item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
