import app from "./app";
import "babel-polyfill";
async function main() {
  await app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
  });

  app.get("/", function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Worldssss\n");
  });
}

main();
