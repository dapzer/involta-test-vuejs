import { NewsType } from '~/types/newsType'

interface State {
  buffer: NewsType[];
}

export const state = () => ({
  buffer: []
})

export const mutations = {
  setBuffer (state: State, data: NewsType[]) {
    state.buffer = data
  }
}

export const actions = {

}
