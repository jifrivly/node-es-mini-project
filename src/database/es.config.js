const { Client: DefaultClient } = require("@elastic/elasticsearch");
const { Client: EsClient } = require("elasticsearch");

const esClient1 = new DefaultClient({
  node: "http://localhost:9200",
});

const esClient2 = new EsClient({
  host: "localhost:9200",
  log: "error",
});

module.exports = { esClient2, esClient1 };
