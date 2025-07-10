import { useState } from "react";

function App() {
  const [checkedItems, setCheckedItems] = useState({
    software: false,
    traveling: false,
    dogs: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const thankYouMessage = submitted ? <p>Thanks for signing up!</p> : null

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  return (
    <main>
      <h1>Hi, I'm Priscila</h1>
      <img alt="My profile pic" src="/images/IMG-20230326-WA0016(1).jpg" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <br></br>

      <form onSubmit={handleSubmitButton}>
        <h2>Sign up for my newsletter!</h2>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />
        <br/>
        <br/>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="Enter your email address" />
        <br/>
        <br/>
        <label>
          <h3>What are your interests?</h3>
          <input
            type="checkbox"
            name="software"
            checked={checkedItems.software}
            onChange={handleCheckboxChange}
          />
          Software Development
        </label>
        <br/>
         <label>
          <input
            type="checkbox"
            name="traveling"
            checked={checkedItems.traveling}
            onChange={handleCheckboxChange}
          />
          Traveling
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="dogs"
            checked={checkedItems.dogs}
            onChange={handleCheckboxChange}
          />
          Dogs
        </label>
        <br/>
        <br/>
        <button type="submit" name="submit">Submit</button>
        {thankYouMessage}       
      </form>
    </main>
  );
}

export default App;
