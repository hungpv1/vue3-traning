/* Default Notifications */
/* eslint-disable */
const noti = {
  default_noti: function () {
    Lobibox.notify("default", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      position: "top right",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  info_noti: function (msg) {
    Lobibox.notify("info", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      position: "top right",
      icon: "bx bx-info-circle",
      msg: msg,
    });
  },

  warning_noti: function () {
    Lobibox.notify("warning", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      position: "top right",
      icon: "bx bx-error",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  error_noti: function () {
    Lobibox.notify("error", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      position: "top right",
      icon: "bx bx-x-circle",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  success_noti: function (msg) {
    Lobibox.notify("success", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      position: "top right",
      icon: "bx bx-check-circle",
      msg: msg,
    });
  },
  /* Rounded corners Notifications */
  round_default_noti: function () {
    Lobibox.notify("default", {
      pauseDelayOnHover: true,
      size: "mini",
      rounded: true,
      delayIndicator: false,
      continueDelayOnInactiveTab: false,
      position: "top right",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  round_info_noti: function () {
    Lobibox.notify("info", {
      pauseDelayOnHover: true,
      size: "mini",
      rounded: true,
      icon: "bx bx-info-circle",
      delayIndicator: false,
      continueDelayOnInactiveTab: false,
      position: "top right",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  round_warning_noti: function () {
    Lobibox.notify("warning", {
      pauseDelayOnHover: true,
      size: "mini",
      rounded: true,
      delayIndicator: false,
      icon: "bx bx-error",
      continueDelayOnInactiveTab: false,
      position: "top right",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  round_error_noti: function () {
    Lobibox.notify("error", {
      pauseDelayOnHover: true,
      size: "mini",
      rounded: true,
      delayIndicator: false,
      icon: "bx bx-x-circle",
      continueDelayOnInactiveTab: false,
      position: "top right",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  round_success_noti: function () {
    Lobibox.notify("success", {
      pauseDelayOnHover: true,
      size: "mini",
      rounded: true,
      icon: "bx bx-check-circle",
      delayIndicator: false,
      continueDelayOnInactiveTab: false,
      position: "top right",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },
  /* Notifications With Images*/
  img_default_noti: function () {
    Lobibox.notify("default", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      position: "top right",
      img: "assets/plugins/notifications/img/1.jpg", //path to image
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  img_info_noti: function () {
    Lobibox.notify("info", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      icon: "bx bx-info-circle",
      position: "top right",
      img: "assets/plugins/notifications/img/2.jpg", //path to image
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  img_warning_noti: function () {
    Lobibox.notify("warning", {
      pauseDelayOnHover: true,
      icon: "bx bx-error",
      continueDelayOnInactiveTab: false,
      position: "top right",
      img: "assets/plugins/notifications/img/3.jpg", //path to image
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  img_error_noti: function () {
    Lobibox.notify("error", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      icon: "bx bx-x-circle",
      position: "top right",
      img: "assets/plugins/notifications/img/4.jpg", //path to image
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  img_success_noti: function () {
    Lobibox.notify("success", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      position: "top right",
      icon: "bx bx-check-circle",
      img: "assets/plugins/notifications/img/5.jpg", //path to image
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },
  /* Notifications With Images*/
  pos1_default_noti: function () {
    Lobibox.notify("default", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      position: "center top",
      size: "mini",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  pos2_info_noti: function () {
    Lobibox.notify("info", {
      pauseDelayOnHover: true,
      icon: "bx bx-info-circle",
      continueDelayOnInactiveTab: false,
      position: "top left",
      size: "mini",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  pos3_warning_noti: function () {
    Lobibox.notify("warning", {
      pauseDelayOnHover: true,
      icon: "bx bx-error",
      continueDelayOnInactiveTab: false,
      position: "top right",
      size: "mini",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  pos4_error_noti: function () {
    Lobibox.notify("error", {
      pauseDelayOnHover: true,
      icon: "bx bx-x-circle",
      size: "mini",
      continueDelayOnInactiveTab: false,
      position: "bottom left",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  pos5_success_noti: function () {
    Lobibox.notify("success", {
      pauseDelayOnHover: true,
      size: "mini",
      icon: "bx bx-check-circle",
      continueDelayOnInactiveTab: false,
      position: "bottom right",
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },
  /* Animated Notifications*/
  anim1_noti: function () {
    Lobibox.notify("default", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      position: "center top",
      showClass: "fadeInDown",
      hideClass: "fadeOutDown",
      width: 600,
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  anim2_noti: function () {
    Lobibox.notify("info", {
      pauseDelayOnHover: true,
      icon: "bx bx-info-circle",
      continueDelayOnInactiveTab: false,
      position: "center top",
      showClass: "bounceIn",
      hideClass: "bounceOut",
      width: 600,
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },
  anim3_noti: function () {
    Lobibox.notify("warning", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      icon: "bx bx-error",
      position: "center top",
      showClass: "zoomIn",
      hideClass: "zoomOut",
      width: 600,
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  anim4_noti: function () {
    Lobibox.notify("error", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      icon: "",
      position: "center top",
      showClass: "lightSpeedIn",
      hideClass: "lightSpeedOut",
      icon: "bx bx-x-circle",
      width: 600,
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },

  anim5_noti: function () {
    Lobibox.notify("success", {
      pauseDelayOnHover: true,
      continueDelayOnInactiveTab: false,
      position: "center top",
      showClass: "rollIn",
      hideClass: "rollOut",
      icon: "bx bx-check-circle",
      width: 600,
      msg: "Lorem ipsum dolor sit amet hears farmer indemnity inherent.",
    });
  },
};

export default noti;
