'use server'
import { Fetcher } from '@/lib/fetcher'
import { TOrder } from '@/types/order'

import { OrderDetails } from '@/components/pages/dashboard/orders/order-details'
import OrdersTable from './orders-table'

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: {
    order?: string
  }
}) {
  const orders = await Fetcher<TOrder[]>('/get-orders', {
    next: {
      tags: ['get-orders'],
    },
  })

  return (
    <main className="container mx-auto mt-6 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3 xl:col-span-2">
        <OrdersTable orders={orders} />
      </div>
      <div className="lg:col-span-3 xl:col-span-1">
        <OrderDetails
          orderId={
            searchParams.order ? Number(searchParams.order) : orders[0].id
          }
        />
      </div>
    </main>
  )
}
