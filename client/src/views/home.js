import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState("");

  const changeUser = (e) => {
    const { value } = e.target;
    setUser(value);
  };

  const fetchUser = (e) => {
    if (e.key === "Enter") {
      navigate("/users/"+user)
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="md:container mx-auto mx-auto flex justify-center">
          <div className="inputUser flex-row">
            <div className="gitLogo">
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png?w=360" alt=""/>
            </div>
            <div className="formUser flex justify-center">
              <form>
                <span>username</span>
                <input
                  type="text"
                  name="username"
                  placeholder="Input GitHub Username"
                  onKeyDown={fetchUser}
                  onChange={changeUser}
                />
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

