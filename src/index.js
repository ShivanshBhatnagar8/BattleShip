import "./css/style.css";
import "./css/query.css";
import { creatingGameUi } from "./view/UI";
import { Ship } from "./model/ship";
import { renderLogic } from "./controller/gameLogic";
creatingGameUi.pageLoad();
renderLogic();
