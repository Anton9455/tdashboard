const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");

const schemaString = readFileSync("./schema.graphql", { encoding: "utf8" });

const schema = buildSchema(schemaString);

const allTabs = [
  {
    id: "1",
    order: "1",
    title: "Нужно сделать",
    description: "Блок задач, которые планируются в работу",
    tasks: [
      {
        id: "1",
        order: "1",
        title: "Реализация приложения",
        description: "Подготовка архитектуры",
      },
      {
        id: "1",
        order: "2",
        title: "Дизайн",
        description: "Проработка макетов",
      },
    ],
  },
  {
    id: "2",
    order: "2",
    title: "В процессе",
    description: "Блок задач, находящихся в работе",
    tasks: [
      {
        id: "1",
        order: "1",
        title: "Документация",
        description: "Подготовка документации",
      },
    ],
  },
  {
    id: "3",
    order: "3",
    title: "Готово",
    description: "Блок выполненных задач",
    tasks: [],
  },
];

const root = {
  getAllTabs: () => {
    return allTabs;
  },
  addTab: (params) => {
    allTabs.push({
      ...params.tab,
    });

    return true;
  },
};

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3001);

console.log("http://localhost:3001/graphql");
