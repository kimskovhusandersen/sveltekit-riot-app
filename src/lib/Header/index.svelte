<script lang="ts">
	import { tw } from 'twind';
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header class={tw`flex justify-between`}>
	<div class={tw`h-8 w-8`}>
		<a class="flex items-center justify-center w-full h-full" href="https://kit.svelte.dev">
			<img class="h-8 w-8 object-contain" src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class="flex justify-center bg-gray-200">
		<ul class="relative p-0 m-0 h-12 flex items-center list-none">
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/champions'}>
				<a sveltekit:prefetch href="/champions">Champions</a>
			</li>
			<li class:active={$page.path === '/summoners/Doublelift'}>
				<a sveltekit:prefetch href="/summoners/Doublelift">Summoners</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class={tw`h-8 w-8`}>
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
