<template>
    <li class="nav-item dropdown dropdown-large">
        <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            <span class="alert-count">7</span>
            <i class="bx bx-bell"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
            <a href="javascript:;">
                <div class="msg-header">
                    <p class="msg-header-title">Notifications</p>
                    <p class="msg-header-clear ms-auto">Marks all as read</p>
                </div>
            </a>
            <div class="header-notifications-list">
                <a v-for="notfication in notfications" :key="notfication.id" class="dropdown-item" href="javascript:;">
                    <div class="d-flex align-items-center">
                        <div class="notify bg-light-primary text-primary">
                            <i class="bx bx-group"></i>
                        </div>
                        <div class="flex-grow-1">
                            <h6 class="msg-name">
                                {{ notfication.msg_name }}<span class="msg-time float-end">{{ notfication.msg_time }}</span>
                            </h6>
                            <p class="msg-info">{{ notfication.msg_info }}</p>
                        </div>
                    </div>
                </a>
            </div>
            <a href="javascript:;">
                <div class="text-center msg-footer">View All Notifications</div>
            </a>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            notfications: [
                { id: 1, msg_name: 'New Customers', msg_time: '14 Sec ago', msg_info: '5 new user registered' },
                { id: 2, msg_name: 'New Orders', msg_time: '2 min ago', msg_info: 'You have recived new orders' },
                { id: 3, msg_name: '24 PDF File', msg_time: '19 min ago', msg_info: 'The pdf files generated' },
                { id: 4, msg_name: 'Time Response', msg_time: '28 min ago', msg_info: '5.1 min avarage time response' },
                { id: 5, msg_name: 'New Product Approved', msg_time: '2 hrs ago', msg_info: 'Your new product has approved' },
                { id: 6, msg_name: 'New Comments', msg_time: '4 hrs ago', msg_info: 'New customer comments recived' },
                { id: 7, msg_name: 'Your item is shipped', msg_time: '5 hrs ago', msg_info: 'Successfully shipped your item' }
            ],
        }
    }
}
</script>