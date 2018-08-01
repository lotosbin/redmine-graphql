import {keyProject, projectLoader} from "./Project";
import {keyRelation, relationLoader} from "./Relation";
import {keyTask, taskLoader} from "./Task";

const c = {
    taskLoader: taskLoader,
    keyTask: keyTask,
    relationLoader: relationLoader,
    keyRelation: keyRelation,
    projectLoader: projectLoader,
    keyProject: keyProject,
};
export default c;
