export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold">About</h1>
      <br />
      <p>
        Hello! I'm Conrad and you are currently visiting my personal website.
        Hope you like it 🤯
      </p>
      <br />
      <h1 className={"text-2xl font-bold space-y-8"}>Education/Skills</h1>
      <p>
        I'm currently taking a Bachelor in IT - Programming at Høyskolen
        Kristiana
      </p>
      <div>
        <ul className={"list-disc list-inside space-y-1"}>
          <li>Java</li>
          <li>Javascript</li>
          <li>Databases/SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}
