<template>
   
    <span class="display-5">{{title}}</span>
    <button @click="add" style="margin-left: 20px;"><slot></slot></button>
    
   
</template>


<script>


export default {
    name: 'Home',
    emits: ['add'],

    props: ['title'],

    methods: {
        add() {
            this.$emit('add')
        }
    }

   
}
</script>
