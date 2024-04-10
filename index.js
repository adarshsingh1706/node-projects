const express = require("express");
const app = express();
const PORT = 8001;
const urlRoute = require("./routes/url");
const { connectMongoDB } = require("./connect");
const URL = require("./models/url");

connectMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB Connected")
);

//middleware
app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId, //find
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL)
});

app.listen(PORT, () => console.log(`SERVER RUNNING AT PORT : ${PORT}`));









//Notes

/*In MongoDB, the `$push` operator is used to add an element to an array field within a document. It is part of the update operators in MongoDB and is commonly used to update arrays in documents. When you use `$push`, MongoDB adds the specified value to the array field if the field is an array. If the field is absent in the document, `$push` creates the array field with the specified value as its element.

For example, consider a document in a MongoDB collection representing a user with an array field `favoriteFruits`:

```json
{
  "_id": ObjectId("..."),
  "username": "example_user",
  "favoriteFruits": ["apple", "banana"]
}
```

If you want to add `"orange"` to the `favoriteFruits` array using `$push`, you can do so with an update operation:

```javascript
db.users.updateOne(
  { "_id": ObjectId("...") },
  { "$push": { "favoriteFruits": "orange" } }
)
```

After this update operation, the `favoriteFruits` array in the document will look like `["apple", "banana", "orange"]`. */