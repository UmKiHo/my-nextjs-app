import { useBearStore } from '@/store'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import BearsPage from '../page'

describe('BearsPage', () => {
    beforeEach(() => {
        const store = useBearStore.getState()
        store.annahilateBears()
    })

    it('renders bears counter and buttons', () => {
        render(<BearsPage />)

        expect(screen.getByText('Bears Counter (CSR Example)')).toBeInTheDocument()
        expect(screen.getByText('There are 0 bears in the store')).toBeInTheDocument()
        expect(screen.getByText('💀')).toBeInTheDocument()

        const increaseButton = screen.getByRole('button', { name: 'Increase Bears' })
        const decreaseButton = screen.getByRole('button', { name: 'Decrease Bears' })
        const annahilateButton = screen.getByRole('button', { name: 'Annahilate Bears' })

        expect(increaseButton).toBeInTheDocument()
        expect(decreaseButton).toBeDisabled()
        expect(annahilateButton).toBeDisabled()
    })

    it('increases and decreases bears count', () => {
        render(<BearsPage />)

        const increaseButton = screen.getByRole('button', { name: 'Increase Bears' })
        const decreaseButton = screen.getByRole('button', { name: 'Decrease Bears' })

        fireEvent.click(increaseButton)
        expect(screen.getByText('There are 1 bears in the store')).toBeInTheDocument()
        expect(screen.getByText('🐻')).toBeInTheDocument()
        expect(decreaseButton).not.toBeDisabled()

        fireEvent.click(decreaseButton)
        expect(screen.getByText('There are 0 bears in the store')).toBeInTheDocument()
        expect(screen.getByText('💀')).toBeInTheDocument()
        expect(decreaseButton).toBeDisabled()
    })

    it('annahilates bears', () => {
        render(<BearsPage />)

        const increaseButton = screen.getByRole('button', { name: 'Increase Bears' })
        const annahilateButton = screen.getByRole('button', { name: 'Annahilate Bears' })

        // bears 추가
        fireEvent.click(increaseButton)
        fireEvent.click(increaseButton)
        expect(screen.getByText('There are 2 bears in the store')).toBeInTheDocument()
        expect(screen.getByText('🐻🐻')).toBeInTheDocument()

        // bears 제거
        fireEvent.click(annahilateButton)
        expect(screen.getByText('There are 0 bears in the store')).toBeInTheDocument()
        expect(screen.getByText('💀')).toBeInTheDocument()
        expect(annahilateButton).toBeDisabled()
    })
}) 