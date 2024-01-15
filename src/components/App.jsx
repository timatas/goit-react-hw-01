import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import { TaskTitle } from "./TaskTitle/TaskTitle";
import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <TaskTitle> Task 1 </TaskTitle>
      <Profile user={userData} />
      <TaskTitle> Task 2 </TaskTitle>
      <FriendList friends={friends} />
      <TaskTitle> Task 3 </TaskTitle>
      <TransactionHistory items={transactions} />
    </>
  );
}
