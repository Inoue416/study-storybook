import React from "react";
import { Star } from "lucide-react";

type taskType = {
	id: string;
	title: string;
	state: string;
};

type TaskProps = {
	task: taskType;
	// onArchiveTask: (id: string) => void;
	// onPinTask: (id: number) => void;
};

export default function Task(props: TaskProps) {
	return (
		<div className={"flex gap-2 justify-start"}>
				<input
					type="checkbox"
					disabled={true}
					name="checked"
					id={`archiveTask-${props.task.id}`}
					className="checkbox size-12"
					checked={props.task.state === "TASK_ARCHIVED"}
        />
				<input
					type="text"
					placeholder="Type here"
					className={
						props.task.state === "TASK_ARCHIVED"
							? "input input-bordered w-full max-w-xs line-through"
							: "input input-bordered w-full max-w-xs"
					}
					readOnly={true}
					value={props.task.title}
				/>
			{props.task.state !== "TASK_ARCHIVED" &&
				(props.task.state === "TASK_PINNED" ? (
					<Star color={"yellow"} size={46} />
				) : (
					<Star size={46}/>
				))}
		</div>
	);
}
