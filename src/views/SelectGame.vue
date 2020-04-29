<template>
    <div class="select-game">

        <div class="start-new-game">
            <NewGame />
        </div>
        <div class="load-saved-game">
            <LoadGame />
        </div>
    </div>
</template>

<script>
import NewGame from '@/components/NewGame'
import LoadGame from '@/components/LoadGame'

export default {
    computed: {
    
    },
    components: {
        NewGame,
        LoadGame,
    },
}
</script>

<style>

</style>