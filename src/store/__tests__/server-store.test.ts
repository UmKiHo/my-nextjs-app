import { describe, expect, it } from 'vitest'
import { useServerStore } from '../server-store'

describe('useServerStore', () => {
    beforeEach(() => {
        const store = useServerStore.getState()
        store.setData(null)
    })

    it('initializes with null data', () => {
        const store = useServerStore.getState()
        expect(store.data).toBeNull()
    })

    it('sets data', () => {
        const store = useServerStore.getState()
        const testData = {
            lastUpdated: '2024-01-01T00:00:00.000Z',
            serverMessage: 'Test message',
        }

        store.setData(testData)
        const updatedStore = useServerStore.getState()
        expect(updatedStore.data).toEqual(testData)
    })

    it('updates message with existing data', () => {
        const store = useServerStore.getState()
        const testData = {
            lastUpdated: '2024-01-01T00:00:00.000Z',
            serverMessage: 'Test message',
        }

        store.setData(testData)
        store.updateMessage('Updated message')

        const updatedStore = useServerStore.getState()
        expect(updatedStore.data).toEqual({
            ...testData,
            serverMessage: 'Updated message',
        })
    })

    it('updates message without existing data', () => {
        const store = useServerStore.getState()
        const now = new Date()
        const message = 'New message'

        store.updateMessage(message)

        const updatedStore = useServerStore.getState()
        expect(updatedStore.data).toBeTruthy()
        expect(updatedStore.data?.serverMessage).toBe(message)
        expect(new Date(updatedStore.data!.lastUpdated).getTime()).toBeGreaterThanOrEqual(now.getTime())
    })
}) 