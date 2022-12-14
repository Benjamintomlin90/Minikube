export interface LocationColumn {
  id: 'sceneId' | 'maxUsersPerInstance' | 'scene' | 'name' | 'type' | 'tags' | 'videoEnabled' | 'action'
  label: string
  minWidth?: number
  align?: 'right' | 'center'
}

export const locationColumns: LocationColumn[] = [
  {
    id: 'name',
    label: 'Name',
    minWidth: 65
  },
  { id: 'sceneId', label: 'Scene', minWidth: 65 },
  {
    id: 'maxUsersPerInstance',
    label: 'Max Users Per Instance',
    minWidth: 80,
    align: 'center'
  },
  {
    id: 'type',
    label: 'Type',
    minWidth: 65,
    align: 'right'
  },
  {
    id: 'tags',
    label: 'Tags',
    minWidth: 65,
    align: 'center'
  },
  {
    id: 'videoEnabled',
    label: 'Video Enabled',
    minWidth: 65,
    align: 'center'
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 65,
    align: 'right'
  }
]

export interface LocationData {
  id: string
  user: any
  name: string
  avatar: string
  status: string
  location: string
  inviteCode: string
  instanceId: string
  action: any
}
