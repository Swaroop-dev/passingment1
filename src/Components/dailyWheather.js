import React from 'react'

export default function DailyWheather({
  data: { weather_state_name, applicable_date, max_temp ,min_temp,the_temp},
}) {
    return (
        <h1>{ weather_state_name}</h1>
    );
}
