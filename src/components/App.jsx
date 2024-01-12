import userData from "../userData.json";
import { Profile } from "./Profile";

export default function App() {
  return (
    <>
      <Profile user={userData} />
    </>
  );
}
