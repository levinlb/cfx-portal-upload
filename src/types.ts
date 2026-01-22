export interface ReUploadResponse {
  asset_id: number
  errors: null
}

export interface Asset {
  id: number
  name: string
  state: string
  errors?: {
    general?: string[]
  }
}

export interface AssetResponse {
  items: Asset[]
}

export interface SearchResponse {
  items: Asset[]
}

export interface DownloadUrlResponse {
  url: string
}

export interface SSOResponseBody {
  url: string
}

export enum Urls {
  API = 'https://portal-api.cfx.re/v1/',
  SSO = 'auth/discourse?return=',
  REUPLOAD = 'assets/{id}/re-upload',
  UPLOAD_CHUNK = 'assets/{id}/upload-chunk',
  COMPLETE_UPLOAD = 'assets/{id}/complete-upload',
  DOWNLOAD = 'assets/{id}/download'
}
