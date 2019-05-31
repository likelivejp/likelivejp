export const state = () => ({
  isMenuActive: false
})

export const mutations = {
  toggleMenu(state) {
    state.isMenuActive = !state.isMenuActive
  },
  closeMenu(state) {
    state.isMenuActive = false
  }
}
