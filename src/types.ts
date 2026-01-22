export interface ReUploadResponse {
  asset_id: number
  errors: null
}

export interface Asset {
  id: number
  name: string
}

export interface SearchResponse {
  items: Asset[]
}

export interface SSOResponseBody {
  url: string
}

export interface AssetFile {
  id: number
  file_key: string
  file_name: string
  file_size: number
  download_url: string
}

export interface AssetDetailsResponse {
  id: number
  name: string
  file: AssetFile | null
}

export enum Urls {
  API = 'https://portal-api.cfx.re/v1/',
  SSO = 'auth/discourse?return=',
  REUPLOAD = 'assets/{id}/re-upload',
  UPLOAD_CHUNK = 'assets/{id}/upload-chunk',
  COMPLETE_UPLOAD = 'assets/{id}/complete-upload',
  ASSET_DETAILS = 'assets/{id}'
}
