import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { WebsiteData } from '../interface/interface'

interface HistoryState {
    historyList: WebsiteData[]
    addHist: (data: WebsiteData) => void
    removeOneHist: (ind: number) => void
    removeAllHist: () => void
}

export const useHistoryStore = create<HistoryState>()(
    devtools(
        persist(
            (set) => ({
                historyList: [],
                addHist: (data) => set((state) => ({ 
                    historyList: [...state.historyList, data]
                })),
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
