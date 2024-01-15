import css from "./TransactionItem.module.css";

export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.typeTransactionItem}>{type}</td>
      <td className="amount">{amount}</td>
      <td className="currency">{currency}</td>
    </>
  );
};
