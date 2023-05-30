import { Booking, BookingApi, Configuration } from '@/client'
import useSWR from 'swr'

function useCalendar () {
    const getBooking = async () => {
        const conf = new Configuration()
        const client = new BookingApi(conf)
        return client.getAllBooking()
            .then((response) => response.data)
            .catch((error) => error)
    }
    const { data, error, isLoading, mutate } = useSWR("calendar",getBooking, { revalidateIfStale: true, refreshWhenHidden: false })

    return {
        status: true,
        data: data as Booking[],
        isLoading,
        isError: error,
        mutate
      }
}

export default useCalendar