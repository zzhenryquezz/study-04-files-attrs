export interface IDriveEntry {
    name: string
    path: string
    metas: Record<string, any>
}

export interface IDrive {
    list(): Promise<IDriveEntry[]>
    setMeta(path: string, metas: Record<string, any>): Promise<void>
}