<template>
<div>
  <div class="mb-3">
        <label for="desc" class="form-label">Task</label>
        <input type="text" class="form-control" id="desc" v-model='desc' placeholder="task">
    </div>
    <div class="mb-3">
        <label for="deadline" class="form-label">Deadline</label>
        <input type="date" class="form-control" id="deadline" v-model='deadline' placeholder="deadline">
    </div>

    <button type="button" @click="add" class="btn btn-primary w-100">Add New Task</button>
    <hr>
</div>

</template>

<script>


export default {

    name: 'AddTask',
    data() {
        return {
            desc: '',
            deadline: ''
        }
    },
    methods: {
        add() {
            let newTask = {
                id: Math.floor(Math.random() * 10000),
                text: this.desc,
                day: this.deadline
            }
            this.$emit('add', newTask)
        }
    }
    
}
</script>
