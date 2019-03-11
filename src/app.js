const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const imdb = require("./imdb");
const DENZEL_IMDB_ID = "nm0000243";

const CONNECTION_URL = "mongodb+srv://ccarlier:123@cluster0-jildh.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "Dataset";
var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


app.listen(9292, () => {

    MongoClient.connect(
        CONNECTION_URL,
        { useNewUrlParser: true },
        (error, client) => {
            if (error)
            {
                throw error;
            }
            database = client.db(DATABASE_NAME);
            collection = database.collection("movies");
            console.log(`Connected to ${DATABASE_NAME}`);
        }
    );
});

app.get("/movies/populate", async (request, response) => {

    const movies = await imdb(DENZEL_IMDB_ID);
    collection.insertMany(movies, (err, result) => {
        if (err)
        {
            return response.status(500).send(err);

        }

        response.send(`Total movies added : ${movies.length}`);

    });

});