import { Controller, Get, Param } from '@nestjs/common';

@Controller('date')
export class DateController {
    @Get(':date')
    getDate(@Param() params: { date: string }): any {
        // Do something with the name query parameter
        const date = params.date;
        if (!date)
            return { unix: new Date().getTime(), utc: new Date().toUTCString() };
        if (isNaN(Number(date))) {
            const d = new Date(date);

            if (d.toString() === 'Invalid Date') {
                return { error: 'Invalid Date' };
            }
            // console.log(Date.UTC(d))
            return { unix: d.valueOf(), utc: d.toUTCString() };
        }
        const d = new Date(Number(date));
        if (d.toString() === 'Invalid Date') {
            return { error: 'Invalid Date' };
        }
        // console.log(Date.UTC(d))
        return { unix: d.getTime(), utc: d.toUTCString() };
    }
}