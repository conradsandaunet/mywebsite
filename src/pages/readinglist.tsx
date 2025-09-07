export default function ReadingList() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Reading List</h1>
      <p>
        Welcome to my digital bookshelf! This is where I keep track of the books
        I read :)
      </p>
      <div className="mt-20"></div>
      <h1 className="text-4xl text-blue-950 font-serif font-bold">2025</h1>
      <div className="mt-5"></div>
      <div>
        <table className="table-fixed w-250 border-separate border-spacing-y-6">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td>Mistborn: The Final Empire</td>
              <td>Brandon Sanderson</td>
              <td>05/11/2025</td>
              <td>⭑⭑⭑⭑</td>
            </tr>
            <tr>
              <td>The Way of Kings</td>
              <td>Brandon Sanderson</td>
              <td>06/30/2025</td>
              <td>⭑⭑⭑⭑⭑</td>
            </tr>
            <tr>
              <td>The Rage of Dragons</td>
              <td>Evan Winter</td>
              <td>07/04/2025</td>
              <td>⭑⭑⭑⭑⭑</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-20"></div>
      <div>
        <h1 className="text-4xl text-blue-950 font-serif font-bold">2024</h1>
        <div className="mt-5"></div>
        <table className="table-fixed w-250 border-separate border-spacing-y-6">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td>Killing Floor (Jack Reacher #1)</td>
              <td>Lee Child</td>
              <td>01/25/2024</td>
              <td>⭑⭑⭑</td>
            </tr>
            <tr>
              <td>Persuader</td>
              <td>Lee Child</td>
              <td>02/02/2024</td>
              <td>⭑⭑⭑</td>
            </tr>
            <tr>
              <td>The Shining</td>
              <td>Stephen King</td>
              <td>07/04/2025</td>
              <td>⭑⭑⭑⭑</td>
            </tr>
            <tr>
              <td>Journey of the Pharaohs</td>
              <td>Clive Cussler</td>
              <td>07/05/2025</td>
              <td>⭑⭑⭑⭑</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-20"></div>
      <div>
        <h1 className="text-4xl text-blue-950 font-serif font-bold">2023</h1>
        <div className="mt-5"></div>
        <table className="table-fixed w-250 border-separate border-spacing-y-6">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td>Rich Dad Poor Dad</td>
              <td>Robert T. Kiyosaki</td>
              <td>07/05/2023</td>
              <td>⭑⭑⭑</td>
            </tr>
            <tr>
              <td>Atomic Habits</td>
              <td>James Clear</td>
              <td>07/29/2024</td>
              <td>⭑⭑⭑⭑</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
