import { create } from 'zustand'

export interface ServerData {
    lastUpdated: string
    serverMessage: string
}

interface ServerStore {
    data: ServerData | null
    setData: (data: ServerData | null) => void
    updateMessage: (message: string) => void
}

export const useServerStore = create<ServerStore>((set) => ({
    data: null,
    setData: (data) => set({ data }),
    updateMessage: (message) =>
        set((state) => ({
            data: state.data
                ? { ...state.data, serverMessage: message }
                : { serverMessage: message, lastUpdated: new Date().toISOString() },
        })),
})) 