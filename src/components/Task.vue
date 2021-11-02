<template>
<div class="task">
     <h3>
        {{ task.text }} 
        <button class="btn btn-secondary float-end" @click="onDelete">Delete</button>
     </h3>
     <p>{{ task.day }} </p>
     
     
</div>
   
</template>

<script>

export default {
    name: 'Task',
    props: ['task'],
    methods: {
        onDelete() {
            this.$emit('del')
        }
    }
}
</script>

<style scoped>
    .task {
        background: rgb(209, 207, 207);
        margin: 5px;
        padding: 10px;
    }
</style>
