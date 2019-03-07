import { createCommandFactory, createProcess } from '@dojo/framework/stores/process';
import { State } from '../interfaces';
import { OutletContext } from "@dojo/framework/routing/interfaces";
import { replace } from '@dojo/framework/stores/state/operations';

export const commandFactory = createCommandFactory<State>();

export interface ChangeRoutePayload {
    outlet: string;
    context: OutletContext;
  }

// redict to another page programmatic
const toProfileCommand = commandFactory(
    ({ path }) => {
      return [
        replace(path("routing", "outlet"), "profile")
      ];
    }
  );

  export const toProfileProcess = createProcess("to-profile", [
    toProfileCommand
  ]);
  