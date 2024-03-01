import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '@/api/get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '2021-07-01',
      receipt: 20,
    },
    {
      date: '2021-07-02',
      receipt: 30,
    },
    {
      date: '2021-07-03',
      receipt: 40,
    },
  ])
})
