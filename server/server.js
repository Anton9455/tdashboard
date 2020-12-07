const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");

const schemaString = readFileSync("./schema.graphql", { encoding: "utf8" });

const schema = buildSchema(schemaString);

const genId = () =>
  Math.floor(Math.random() * 20) + Math.floor(new Date().getTime()).toString();

const allTabs = [
  {
    id: "1",
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
  addTask: (params) => {
    allTabs.forEach((tab) => {
      if (tab.id === params.id) {
        tab.tasks.push({
          id: genId(),
          order: tab.tasks.length,
          title: "",
          description: "",
        });
      }
    });
    return true;
  },
  changeTask: ({ id, title, description }) => {
    allTabs.forEach((tab) => {
      tab.tasks.forEach((task) => {
        if (task.id === id) {
          task.title = title;
          task.description = description;
          console.log("task", task);
        }
      });
    });
    return true;
  },
  removeTask: (params) => {
    allTabs.forEach((tab) => {
      tab.tasks = tab.tasks.filter((task) => {
        if (task.id !== params.id) {
          return task;
        }
      });
    });
    return true;
  },
  removeTab: ({ id }) => {
    allTabs.splice(
      allTabs.findIndex((tab) => tab.id === id),
      1
    );
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
