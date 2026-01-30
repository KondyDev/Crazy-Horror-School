import { StepType } from "shared/types/StepType";
import { StepExecutors } from "./steps";
import { ConsequenceType } from "shared/types/ConsequenceType";

export default class Ritual {
	steps: StepType[];
	consequences: ConsequenceType[];

	constructor(steps: StepType[], consequences: ConsequenceType[]) {
		this.steps = steps;
		this.consequences = consequences;
	}

	execute(step: StepType) {
		StepExecutors[step]();
	}
}
