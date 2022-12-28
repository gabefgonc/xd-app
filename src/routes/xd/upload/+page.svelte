<script lang="ts">


    const showPreview = event => {
        const target = event.target
        const files = target.files

        if(files.length > 0){
            const src = URL.createObjectURL(files[0])
            const preview = document.getElementById('upload-preview') as HTMLImageElement
            preview.src = src
        }
    }
</script>

<form method="POST" action="?/xd/upload" class="flex flex-col items-center space-y-2 w-full">
			<div class="form-control w-full max-w-xs">
				<label for="text" class="label font-medium pb-1">
					<span class="label-text">Comentário</span>
				</label>
				<input type="text" name="name" class="input input-bordered w-full max-w-xs" />
			</div>
            
			<div class="form-control w-full max-w-xs">
				<label for="file" class="label font-medium pb-1">
					<span class="label-text">Imagem</span>
				</label>
				<input type="file" name="image" class="file-input" on:change={showPreview} />
			</div>

            <img alt="quando fizer upload do arquivo, ele aparecerá aqui" class="max-w-sm" id="upload-preview"/>

			<div class="w-full max-w-xs pt-3">
				<button class="btn btn-primary w-full max-w-xs">Postar</button>
			</div>
		</form>