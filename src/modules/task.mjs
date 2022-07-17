import { format } from 'date-fns'


const date = format(new Date(), 'dd MMMM')
console.log(date)
//=> "3 days ago"