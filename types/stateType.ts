import { NewsType } from '@/types/newsType'

export interface StateType {
  post: {
    buffer: NewsType[];
    search: string;
    source: string;
    viewFilter: string;
  }

}
