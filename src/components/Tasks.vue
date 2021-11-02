<template>
    <div> 
        <div :key="task.id" v-for="task in tasks" class="list-unstyled text-start">
            <Task :task='task' @del="$emit('del', task.id)"></Task>
        </div>
    </div>
</template>

<script>
import Task from './Task.vue'


export default ({
   name: 'Tasks',
   props: ['tasks'],
   components: {
       Task
   }
})
</script>
