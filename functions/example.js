exports = async (request, response) => {
    const client = context.services.get("mongodb-atlas");
    const dbName = context.environment.values.DB;
    const coll = client.db(dbName).collection("example");
    const results = await coll.findOne();
    response.setStatusCode(200);
    response.addHeader("Content-Type", "application/json; charset=utf-8");
    response.addHeader("Cache-Control", "public, s-max-age=3600, max-age=3600");
    response.setBody(JSON.stringify(results));
    return;
};
