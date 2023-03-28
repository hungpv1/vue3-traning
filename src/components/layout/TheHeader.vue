<template>
  <div class="topbar d-flex align-items-center">
    <nav class="navbar navbar-expand">
      <div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div>
      <div class="search-bar flex-grow-1">
        <div class="position-relative search-bar-box">
          <input
            type="text"
            class="form-control search-control"
            placeholder="Type to search..."
          />
          <span class="position-absolute top-50 search-show translate-middle-y">
            <i class="bx bx-search"></i>
          </span>
          <span class="position-absolute top-50 search-close translate-middle-y">
            <i class="bx bx-x"></i>
          </span>
        </div>
      </div>
      <div class="top-menu ms-auto">
        <ul class="navbar-nav align-items-center">
          <li class="nav-item mobile-search-icon">
            <a class="nav-link" href="#"> <i class="bx bx-search"></i> </a>
          </li>
          <li class="nav-item dropdown dropdown-large">
            <a
              class="nav-link dropdown-toggle dropdown-toggle-nocaret"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bx bx-category"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <div class="row row-cols-3 g-3 p-3">
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-cosmic text-white">
                    <i class="bx bx-group"></i>
                  </div>
                  <div class="app-title">Teams</div>
                </div>
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-burning text-white">
                    <i class="bx bx-atom"></i>
                  </div>
                  <div class="app-title">Projects</div>
                </div>
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-lush text-white">
                    <i class="bx bx-shield"></i>
                  </div>
                  <div class="app-title">Tasks</div>
                </div>
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-kyoto text-dark">
                    <i class="bx bx-notification"></i>
                  </div>
                  <div class="app-title">Feeds</div>
                </div>
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-blues text-dark">
                    <i class="bx bx-file"></i>
                  </div>
                  <div class="app-title">Files</div>
                </div>
                <div class="col text-center">
                  <div class="app-box mx-auto bg-gradient-moonlit text-white">
                    <i class="bx bx-filter-alt"></i>
                  </div>
                  <div class="app-title">Alerts</div>
                </div>
              </div>
            </div>
          </li>
          <notification-header></notification-header>  
          <message-header></message-header>
        </ul>
      </div>
      <div class="user-box dropdown">
        <a
          class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="assets/images/avatars/avatar-2.png"
            class="user-img"
            alt="user avatar"
          />
          <div class="user-info ps-3">
            <p class="user-name mb-0">Pauline Seitz</p>
            <p class="designattion mb-0">Web Designer</p>
          </div>
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <li>
            <a @click.prevent="showModal" class="dropdown-item" href="#"><i class="bx bx-user"></i><span>Profile</span></a>
          </li>
          <li>
            <a @click.prevent="logOut" class="dropdown-item" href="javascript:;"><i class="bx bx-log-out-circle"></i><span>Logout</span></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <BaseModal @close-modal="closeModal" v-if="isShowModal" @close="showModal = false">
    <UserProfile/>
  </BaseModal>
</template>

<script>
import MessageHeader from './MessageHeader.vue';
import NotificationHeader from './NotificationHeader.vue';
import BaseModal from '../UI/BaseModal.vue';
import UserProfile from '../form/UserProfile.vue';
import router from '@/router.js';

export default {
    props: [],
    components: {
      MessageHeader,
      NotificationHeader,
      BaseModal,
      UserProfile
    },
    data() {
      return {
        isShowModal: false,
      };
    },
    methods: {
      showModal() {
        this.isShowModal = !this.isShowModal;
      },
      closeModal() {
        this.isShowModal = false;
      },
      logOut() {
        localStorage.removeItem('token');
        router.push('/login');
        this.$toast.success('Log Out!');
      }
    }
}

</script>

