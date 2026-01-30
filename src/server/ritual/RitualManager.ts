import { StepType } from "shared/types/StepType";
import Ritual from "./Ritual";
import { ConsequenceType } from "shared/types/ConsequenceType";

export default class RitualManager {
	private maxSteps: number = 1;
	private possibleSteps: StepType[] = [StepType.DRAW_ON_BOARD, StepType.TURN_OFF_LIGHT];
	private possibleConsequences: ConsequenceType[] = [ConsequenceType.JUMPSCARE];

	createRandomRitual(): Ritual {
		const steps = this.rollSteps();
		const consequences = this.rollConsequences();

		return new Ritual(steps, consequences);
	}

	private rollFromPool<T extends defined>(pool: T[], max: number): T[] {
		const count = math.random(1, max);
		const result: T[] = [];

		for (let i = 0; i < count; i++) {
			const index = math.random(0, pool.size() - 1);
			result.push(pool[index]);
		}

		return result;
	}

	private rollSteps(): StepType[] {
		return this.rollFromPool(this.possibleSteps, this.maxSteps);
	}

	private rollConsequences(): ConsequenceType[] {
		return this.rollFromPool(this.possibleConsequences, this.maxSteps);
	}
}
