import { useState } from "react";

export default function useViewMode() {
    const [viewMode, setViewMode] = useState<'form' | 'table'> ('table')

    const setTableMode = () => setViewMode('table')
    const setFormMode = () => setViewMode('form')

    return {
        isTableMode: viewMode === 'table',
        isFormMode: viewMode === 'form',
        setTableMode,
        setFormMode
    }
}