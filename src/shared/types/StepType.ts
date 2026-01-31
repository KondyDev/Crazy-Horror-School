export enum StepType {
	DRAW_ON_BOARD,
	TURN_OFF_LIGHT,
}

export interface Step {
	id: string;
	type: StepType;
	completed: boolean;
}
