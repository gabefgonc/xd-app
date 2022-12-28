<script lang="ts">
    import { goto } from "$app/navigation";
    export let data

    const gotoUploadXd = () => {
        goto('/xd/upload')
    }
</script>

{#if data.user}
    <div class="flex w-full h-full flex-col justify-center items-center">
        <h1 class="text-3xl font-bold">Esse é o app xD! Seja bem vindo, {data.user.name}</h1>
        <button on:click={gotoUploadXd} class="btn-primary p-2 rounded-xl mt-6">Fazer upload de um xD</button>
    </div>
{:else}
    <h1 class="text-3xl font-bold">Esse é o app xD! Para começar a usar, você deve logar!</h1>
{/if}
