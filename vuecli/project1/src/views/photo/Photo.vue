<template>
    <div>
        photo
    </div>
</template>

<script>
    export default {
        created(){
            this.$emit('routerChange','photo');
        }
    }
</script>
