import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Thank you for signing up, ${name}! Your interests are: ${interests.join(', ')}.`);
  };

  return (
    <main>
      <h1>Hi, I'm Oscar Kimani</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
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

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="interests">Interests:</label>
        <br />
        <input type="checkbox" id="interests-design" name="interests" value="Design" onChange={(e) => {
          if (e.target.checked) {
            setInterests([...interests, e.target.value]);
          } else {
            setInterests(interests.filter((interest) => interest !== e.target.value));
          }
        }} />
        <label htmlFor="interests-design">Design</label>
        <br />
        <input type="checkbox" id="interests-development" name="interests" value="Development" onChange={(e) => {
          if (e.target.checked) {
            setInterests([...interests, e.target.value]);
          } else {
            setInterests(interests.filter((interest) => interest !== e.target.value));
          }
        }} />
        <label htmlFor="interests-development">Development</label>
        <br />
        <input type="checkbox" id="interests-writing" name="interests" value="Writing" onChange={(e) => {
          if (e.target.checked) {
            setInterests([...interests, e.target.value]);
          } else {
            setInterests(interests.filter((interest) => interest !== e.target.value));
          }
        }} />
        <label htmlFor="interests-writing">Writing</label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}

export default App;