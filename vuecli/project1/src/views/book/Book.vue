<template>
    <div>
        book
    </div>
</template>
<script>
    export default {
        created(){
            this.$emit('routerChange','book');
        }
    }
</script>
