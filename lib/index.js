import app from "./app";

async function main() {
  await app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
  });

  app.get("/", function(req, res) {
    res.send("Hello Worldssss!");
  });

 
}

main();
