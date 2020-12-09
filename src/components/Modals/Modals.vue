<template>
<div class="modals">
    <AddAliment />
    <AddCategory />
    <DeleteCategory />
</div>

</template>

<script>
import AddAliment from '../Forms/AddAliment'
import AddCategory from '../Forms/AddCategory'
import DeleteCategory from '../Forms/DeleteCategory'
export default {
    name: 'Modals',
    components: {
        AddAliment,
        AddCategory,
        DeleteCategory
    },
    props: ['dataCategoriesSelect']
}

</script>

<style>
.modals {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

</style>