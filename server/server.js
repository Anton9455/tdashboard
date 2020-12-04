const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");

const schemaString = readFileSync("./schema.graphql", { encoding: "utf8" });

const schema = buildSchema(schemaString);

const genId = () => Math.floor(Math.random() * 20);

const allTabs = [
  {
    id: genId(),
    order: "1",
    title: "Нужно сделать",
    description: "Блок задач, которые планируются в работу",
    tasks: [
      {
        id: genId(),
        order: "1",
        title: "Реализация приложения",
        description: "Подготовка архитектуры",
      },
      {
        id: genId(),
        order: "2",
        title: "Дизайн",
        description: "Проработка макетов",
      },
    ],
  },
  {
    id: genId(),
    order: "2",
    title: "В процессе",
    description: "Блок задач, находящихся в работе",
    tasks: [
      {
        id: genId(),
        order: "1",
        title: "Документация",
        description: "Подготовка документации",
      },
    ],
  },
  {
    id: genId(),
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
      id: params.id,
      order: "",
      title: "",
      description: "",
      tasks: [],
    });

    return true;
  },
  addTabTitle: (params) => {
    allTabs.forEach((tab) => {
      if (tab.id === params.id) {
        tab.title = params.title;
      }
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
