


export let AddTaskActionCreator = () => ( {type: AddTask,}
)

export let UpdateTaskActionCreator = (val) => ( {
        type: UpdateTask,
        val: val
    }
)

export const AddTask = 'Add-Task'

export const UpdateTask = 'Update-Task'