// @ts-ignore
import _ from 'lodash'
import { NewsType } from '~/types/newsType'
import { QueryDefaultValue } from '~/types/QueryDefaultValue'
import { ViewValues } from '~/types/ViewValues'

export interface State {
  buffer: NewsType[];
  news: NewsType[];
  search: string;
  source: string;
  viewFilter: string;
  newsQuantity: number;
  page: number;
  limit: number;
  queryes: {
    search: string
    source: string
  }
}

export const state = (): State => ({
  buffer: [],
  news: [],
  queryes: {
    search: QueryDefaultValue.search,
    source: QueryDefaultValue.source,
  },
  newsQuantity: 0,
  page: 1,
  limit: 3,
  search: QueryDefaultValue.search,
  source: QueryDefaultValue.source,
  viewFilter: ViewValues.fullWidth
})

export const mutations = {
  setBuffer (state: State, data: NewsType[]) {
    state.buffer = data
  },
  changeSearch (state: State, value: string) {
    state.search = value
  },
  changeSource (state: State, value: string) {
    state.source = value
  },
  changeView (state: State, value: string) {
    state.viewFilter = value
  },
  changeNewsQuantity (state: State, value: number) {
    state.newsQuantity = value
  },
  changePage (state: State, page: number) {
    state.page = page
  },
  changeLimit (state: State, limit: number) {
    state.limit = limit
  },
  setQueryes (state: State) {
    state.queryes.search = state.search
    state.queryes.source = state.source
  }
}

export const getters = {
  getNews (state: State) {
    let news = state.buffer
    if (state.source && state.source !== QueryDefaultValue.source) {
      news = news.filter(post => post.source === state.source)
    }

    if (state.search && (state.search !== QueryDefaultValue.search) && (state.search !== undefined)) {
      const search = state.search
      const searchFiltration = (data: string, searchText: string) => {
        return data.toLowerCase().includes(searchText.toLowerCase())
      }
      news = news.filter((post: NewsType) => {
        return (post.description && searchFiltration(post.description, search)) || (post.title && searchFiltration(post.title, search))
      })
    }

    const newsQuantity = news.length

    if (state.limit && state.page > 0) {
      const page = state.page
      const limit = state.limit
      const startIndex = (page - 1) * limit
      const endIndex = page * limit

      news = news.slice(startIndex, endIndex)
    }

    return [news, newsQuantity]
  },
  getPages (state: State) {
    const quantity = Math.ceil(state.newsQuantity / state.limit)
    const page = state.page
    let startPoint: number
    let endPoint: number

    const startPointFormula = () => {
      if (quantity > 4) {
        if (page + 2 < quantity) {
          if (page <= 3) {
            return 1
          } else {
            return page - 1
          }
        } else {
          return quantity - 3
        }
      } else {
        return 1
      }
    }

    const endPointFormula = () => {
      if ((page + 2) < quantity) {
        if (page <= 3) {
          return 5
        } else {
          return page + 3
        }
      } else {
        return quantity + 1
      }
    }
    let pagesNumber: number[] = []
    const updatePagesList = () => {
      pagesNumber = _.range(startPoint, Math.ceil(endPoint))
    }
    const setPoints = () => {
      startPoint = startPointFormula()
      endPoint = endPointFormula()
    }
    setPoints()
    const nextPages = () => {
      startPoint = ((startPoint + 4) <= (quantity - 4) ? startPoint + 4 : quantity - 4)
      endPoint = ((endPoint + 4) <= quantity ? endPoint + 4 : quantity)
      updatePagesList()
    }

    const prevPages = () => {
      startPoint = ((startPoint - 4) >= 1 ? startPoint - 4 : 1)
      endPoint = ((endPoint - 4) >= 1 ? endPoint - 4 : startPoint + 4)
    }
    updatePagesList()

    return {
      prevPages,
      nextPages,
      pagesNumber,
      quantity
    }
  }
}
