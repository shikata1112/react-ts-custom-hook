import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "Shu",
  email: "12345@gmail.com",
  address: "oosakaaa"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
