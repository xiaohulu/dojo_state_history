import {
  createCommandFactory,
  createProcess
} from "@dojo/framework/stores/process";
import { replace } from "@dojo/framework/stores/state/operations";
import { State } from "../interfaces";
import { ChangeRoutePayload } from '../containers/HomeContainer';

export const commandFactory = createCommandFactory<State>();

const changeRouteCommand = commandFactory<ChangeRoutePayload>(
  ({ path, payload: { outlet, context } }) => {
    return [
      replace(path("routing", "outlet"), outlet),
      replace(path("routing", "params"), context.params)
    ];
  }
);
export const changeRouteProcess = createProcess("change-route", [
  changeRouteCommand
]);


