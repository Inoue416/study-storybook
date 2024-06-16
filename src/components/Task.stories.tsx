import type { Meta, StoryObj } from "@storybook/react";

import Task from "./Task";

const meta: Meta<typeof Task> = {
	component: Task,
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Default: Story = {
	args: {
		task: {
			title: "Task title",
			state: "TASK_INBOX",
			id: "1",
		},
	},
};

export const Pinned: Story = {
	args: {
		task: {
			title: "Task title",
			state: "TASK_PINNED",
			id: "1",
		},
	},
};

export const Archived: Story = {
	args: {
		task: {
			title: "Task title",
			state: "TASK_ARCHIVED",
			id: "1",
		},
	},
};
