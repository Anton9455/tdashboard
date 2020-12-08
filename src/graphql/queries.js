import { loader } from "graphql.macro";

export const GET_ALL_TAB = loader("../graphql/GetAllTabs.graphql");
export const ADD_TAB = loader("../graphql/AddTab.graphql");
export const ADD_TAB_TITLE = loader("../graphql/AddTabTitle.graphql");
export const ADD_TASK = loader("../graphql/AddTask.graphql");
export const CHANGE_TASK = loader("../graphql/ChangeTask.graphql");
export const REMOVE_TASK = loader("../graphql/RemoveTask.graphql");
export const REMOVE_TAB = loader("../graphql/RemoveTab.graphql");
export const CHANGE_TASK_POSITION = loader("../graphql/ChangeTaskPosition.graphql");
