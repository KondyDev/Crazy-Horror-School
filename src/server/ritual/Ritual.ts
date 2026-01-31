import { Step, StepType } from "shared/types/StepType";
import { StepExecutors } from "./steps";
import { ConsequenceType } from "shared/types/ConsequenceType";
import { StepCompleted } from "shared/events/RitualEvents";

export default class Ritual {
	private steps = new Map<string, Step>();
	private consequences: ConsequenceType[];

	constructor(steps: Step[], consequences: ConsequenceType[]) {
		for (const step of steps) {
			this.steps.set(step.id, step);
		}
		this.consequences = consequences;
	}

	completeStep(stepId: string) {
		const step = this.steps.get(stepId);
		if (!step || step.completed) return;

		step.completed = true;

		StepCompleted.FireAllClients(stepId);
	}

	execute(step: StepType) {
		StepExecutors[step]();
	}

	getSteps() {
		const result: Step[] = [];
		this.steps.forEach((step) => result.push(step));
		return result;
	}
}
