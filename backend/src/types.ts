export interface Event {
  id: number
  title: string
  description: string
  image_url: string
  date: Date
  host_id: number,
  host: User,
  rsvps: Rsvp[]      
}

export interface User {
  id: number
  username: string
  name: string
  email: string
}

export interface Rsvp {
  event_id: number
  name: string
  email: string
}