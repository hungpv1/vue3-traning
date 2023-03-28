<template>
	<div class="sidebar-wrapper" data-simplebar="true">
		<div class="sidebar-header">
			<div>
				<img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Syndron</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<ul class="metismenu" id="menu">
			<li>
				<router-link to="/">
					<div class="parent-icon"><i class='bx bx-home-circle'></i>
					</div>
					<div class="menu-title">Dashboard</div>
				</router-link>
			</li>
			<li>
				<router-link to="/user-profile">
					<div class="parent-icon"><i class="bx bx-user-circle"></i>
					</div>
					<div class="menu-title">User Profile</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default  {
	props: [],
	mounted() {

	},
	data() {
		return {

		}
	},
	methods: {

	},
	computed: {

	}
}
</script>

