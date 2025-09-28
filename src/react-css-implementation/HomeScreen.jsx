/*
    Internal CSS
    External CSS
    Inline CSS
    CSS - Framwork - Bootstrap / Material Ui / Tildwind css / Sass
 */
import  './homescreen.css'

export function HomeScreen() {

  const p1Style = {
                    backgroundColor: "green",
                    color: "white",
                    margin: 0,
                    height: "50px",
                    textAlign: "center",
                    fontSize: "12px",
                    padding: "20px",
                }

  return (
    <div>

        <div className="Inline-css-example">
            {/*Inline - CSS */}
            <h1
                style={{
                    backgroundColor: "red",
                    color: "white",
                    margin: 0,
                    height: "100px",
                    textAlign: "center",
                    fontSize: "12px",
                    padding: "45px",
                }}
            >
                Home Screen
            </h1>
        </div>

        <div className="Internal-css-Example">
            <p style = {p1Style} >Hello welcome to React - css world </p>
        </div>

        <div className="external-css-example">
            <h3>Hello-External-css</h3>
        </div>

        <div className="extnal-css-example2 ">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus ullam ducimus sed est, adipisci blanditiis consequuntur. Eveniet fuga libero corrupti laboriosam laudantium quos, officia nostrum maxime maiores optio inventore?</p>
        </div>
    </div>
  );
}
