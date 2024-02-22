import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { WebsiteData } from '../interface/interface'

interface HistoryList{
    src: string
    title: string
    visitedDate: Date
}

interface HistoryState {
    historyList: HistoryList[] // Prefer to store 30 links at most
    addHist: (data: WebsiteData) => void
    removeOneHist: (ind: number) => void
    removeAllHist: () => void
}

export const useHistoryStore = create<HistoryState>()(
    devtools(
        persist(
            (set) => ({
                historyList: [],
                addHist: (data) => set((state) => {

                    // Dup links, not to add for history
                    if(state.historyList.length >= 1 && state.historyList[state.historyList.length - 1].src === data.src){
                        return { historyList: state.historyList }
                    }

                    let newHistArr = [
                        ...state.historyList,
                        {
                            src: data.src,
                            title: data.title,
                            visitedDate: new Date()
                        } as HistoryList
                    ];

                    // Check limit
                    if(newHistArr.length > 50){
                        newHistArr.shift();
                    }

                    return {
                        historyList: newHistArr
                    }
                }),
                removeOneHist: (ind) => set((state) => ({ 
                    historyList: state.historyList.filter( (_, i) => i !== ind )
                })),
                removeAllHist: () => set(() => ({ 
                    historyList: []
                })),
            }),
            { name: 'user-history-storage' }
        )
    )
)
