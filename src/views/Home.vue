<template>
    <AddTask v-if='show' @add='doAdd'></AddTask>
    <Tasks v-bind:tasks='taskList' @del='doDelete'></Tasks>
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Tasks,
    AddTask,
  },
  props: ['show'],
  data() {
    return {
        //url : 'http://localhost:5000/tasks'
        // the above does not work with production
        // hence, use a proxy to route
        url: 'api/tasks/',
        taskList: [],
    }
  },
  methods: {
    doAdd(newTask) {
      //this.taskList.push(newTask)
    // use post to send data to backend server
     axios.post(this.url, {
        id: newTask.id,
        text: newTask.text,
        day: newTask.day
      })
      .then(resp => {
        console.log(resp.data)
        this.taskList.push(resp.data)
      })  
    },
    doDelete(id) {
      console.log(id)

       if (confirm('Are you sure?')) {
        
          const u = this.url + `${id}`
          axios.delete(u)
          .then( resp => {
            if (resp.status == 200 ) {
              // delete success
              var idx = 0
              for ( let task of this.taskList) {
                if (id == task.id) {
                  break
                }
                idx++
              }
            this.taskList.splice(idx,1) 

            } else {
              alert("Error deleting task")
            }
          } )
      } 
    }
  },
  fetchTask(id) { // fetch a specific task
    const url = `api/tasks/${id}`
    axios.get(url)
    .then(resp => {
      console.log(resp.data)
    })
  },
  created() {
    /* this.taskList = [
        {
            id: 1,
            text: 'IS216 Project Deadline',
            day: '2021-11-6'
        },
        {
            id: 2,
            text: 'CS440 Project Deadline',
            day: '2021-11-3'
        },
        {
            id: 3,
            text: 'Project meeting',
            day: '2021-11-2'
        }
        ] */
    
    axios.get(this.url)
    .then(resp => {
      console.log(resp.data)
      this.taskList = resp.data
    }) 
  }
}
</script>
