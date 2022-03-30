import { parse } from 'rss-to-json'
import { BaseNewsType } from '~/types/baseNewsType'
import { NewsType } from '~/types/newsType'

export const fetchNews = async () => {
  let localeBuffer: NewsType[] = []
  try {
    const mosResponse = await parse(`${process.env.MOS_API_URL}`, {})
    const mosNews = mosResponse.items.map((item: BaseNewsType) => {
      return {
        title: item.title,
        link: item.link,
        description: item.description,
        date: item.published,
        img: item.enclosures.length > 0 ? item.enclosures[0].url : '',
        source: 'www.mos.ru'
      }
    })
    localeBuffer = localeBuffer.concat(mosNews)
  } catch (error: any) {
    console.log(`Failed to get data from Mos.ru. ${error.message}`)
  }
  try {
    const lentaResponse = await parse(`${process.env.LENTA_API_URL}`, {})
    const lentaNsNews = lentaResponse.items.map((item: BaseNewsType) => {
      return {
        title: item.title,
        link: item.link,
        description: item.description,
        date: item.published,
        img: item.enclosures.length > 0 ? item.enclosures[0].url : '',
        source: 'www.lenta.ru'
      }
    })
    localeBuffer = localeBuffer.concat(lentaNsNews)
  } catch (error: any) {
    console.log(`Failed to get data from Lenta.ru. ${error.message}`)
  }

  return localeBuffer
}
