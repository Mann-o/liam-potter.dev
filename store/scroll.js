export const state = () => ({
  pageIsScrolled: false,
})

export const actions = {
  handle: ({ commit }, isScrolled) => {
    commit(`SET_PAGE_IS${!isScrolled ? '_NOT_' : '_'}SCROLLED`)
  },
}

export const mutations = {
  SET_PAGE_IS_SCROLLED: (state) => {
    state.pageIsScrolled = true
  },
  SET_PAGE_IS_NOT_SCROLLED: (state) => {
    state.pageIsScrolled = false
  },
}
