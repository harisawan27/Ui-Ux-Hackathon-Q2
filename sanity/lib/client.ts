import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: 'sk7moJs0pGxg77IzeNgaOQfY2smCTtHDyJvhU8qRWxtr3DY7zoXK84h0x5aQgzSGsOHpTYKNgLomSEwNO8UpZEwcbhx22j2YA5JKAmLgXrBLpdoug0OBxgBiauBieMFQXFXaIsgKddebOQInFp0xCqKFPWoDvaSLyIrNVbND71Fyzt8WTyPp',
})
