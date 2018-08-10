<template>
    <div>
        music
    </div>
</template>

<script>
    export default {
        created(){
            this.$emit('routerChange','music');
        }
    }
</script>
