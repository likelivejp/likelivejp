export const state = () => ({
  isMenuActive: false,
  isTransparent: true
})

export const mutations = {
  toggleMenu(state) {
    state.isMenuActive = !state.isMenuActive
  },
  closeMenu(state) {
    state.isMenuActive = false
  },
  transparentNavbar(state) {
    state.isTransparent = true
  },
  nonTtransparentNavbar(state) {
    state.isTransparent = false
  }
}
