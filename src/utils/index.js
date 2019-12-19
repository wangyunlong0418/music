import { usePageStore } from "../store"


export const useRecommendStore = () => {
    return usePageStore(['recommend'])
}

export const useSingerStore = () => {
    return usePageStore(['singer'])
}