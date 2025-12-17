import { FC } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table'
import { Cryptocurrency } from '../../models/cryptocurrency'
import { numeric } from '@/shared/lib/number'
import Image from 'next/image'

interface Props {
  data: Cryptocurrency[]
}

const TableList: FC<Props> = ({ data }) => {
  const priceChangeStyle = (value: number): string => {
    if (value < 0) return 'text-red-500'
    else if (value > 0) return 'text-green-600'
    else return ''
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">
            Price <span className="text-gray-400">(USD)</span>
          </TableHead>
          <TableHead className="text-right">
            Market Cap <span className="text-gray-400">(USD)</span>
          </TableHead>
          <TableHead className="text-right">Circulating Supply</TableHead>
          <TableHead className="text-right">Change 24h</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!data.length && (
          <TableRow>
            <TableCell colSpan={5} className="text-center h-20">
              No available data
            </TableCell>
          </TableRow>
        )}

        {data.map((crypto, idx) => (
          <TableRow key={idx}>
            <TableCell>
              <div className="flex items-center space-x-4">
                <Image src={crypto.image} alt="image" width={30} height={30} />
                <div>
                  <div>{crypto.name}</div>
                  <div className="text-sm text-gray-400">
                    {crypto.symbol.toUpperCase()}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right">
              ${numeric(crypto.current_price, true)}
            </TableCell>
            <TableCell className="text-right">
              ${numeric(crypto.market_cap)}
            </TableCell>
            <TableCell className="text-right">
              {numeric(crypto.circulating_supply)} {crypto.symbol.toUpperCase()}
            </TableCell>
            <TableCell
              className={`text-right font-semibold ${priceChangeStyle(
                crypto.price_change_percentage_24h
              )}`}
            >
              {crypto.price_change_percentage_24h}%
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableList
